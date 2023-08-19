/**
 * Transform Figma tokens to a structure that can be
 * ingested by Styled Dictionary.
 * Tokens need to be exported from Figma by this plugin:
 * https://www.figma.com/community/plugin/1253571037276959291/variables2json
 */
import fs from "fs/promises"
import path from "path"
import StyleDictionaryPackage from "style-dictionary"
import { z } from "zod"
import config from "../style-dictionary.config.json" assert { type: "json" }

import tokens from "../tokens/variables.json" assert { type: "json" }

const SourceVariableSchema = z.object({
  name: z.string(),
  type: z.string(),
  isAlias: z.literal(false),
  value: z.string(),
})
const AliasVariableSchema = z.object({
  name: z.string(),
  type: z.string(),
  isAlias: z.literal(true),
  value: z.object({
    collection: z.string(),
    name: z.string(),
  }),
})
const VariableSchema = z.union([SourceVariableSchema, AliasVariableSchema])
const ResultVariableSchema = z.object({
  name: z.string(),
  value: z.string(),
  ref: z.string().optional(),
})

type Variable = z.infer<typeof VariableSchema>
type SourceVariable = z.infer<typeof SourceVariableSchema>
type AliasVariable = z.infer<typeof AliasVariableSchema>
type ResultVariable = z.infer<typeof ResultVariableSchema>

const isVariable = (v: unknown): v is Variable => {
  return VariableSchema.safeParse(v).success
}

const isSourceVariable = (v: unknown): v is SourceVariable => {
  return SourceVariableSchema.safeParse(v).success
}
const isAliasVariable = (v: unknown): v is AliasVariable => {
  return AliasVariableSchema.safeParse(v).success
}

;(async () => {
  let result = {}

  const variables = tokens.collections[0].modes[0].variables

  /**
   * Map to object indexed by token name
   */
  const variableMap: Record<string, Variable & { name: string }> = {}
  for (const variable of variables) {
    if (!isVariable(variable)) {
      VariableSchema.parse(variable)
      return
    }

    const { name, ...rest } = variable
    variableMap[name] = { name, ...rest }
  }

  /**
   * Resolve any aliases
   */
  const valueMap: Record<string, ResultVariable> = {}
  for (const variable of Object.entries(variableMap)) {
    const [k, v] = variable
    if (!isVariable(v)) {
      VariableSchema.parse(v)
      return
    }

    const [lastSectionOfName] = k.split("/").slice(-1)

    let resolvedValue: ResultVariable | null = null
    if (isAliasVariable(v)) {
      const rv = variableMap[v.value.name]

      if (!isSourceVariable(rv)) {
        SourceVariableSchema.parse(rv)
        return
      }

      /**
       * Take value from source token and add reference.
       */
      resolvedValue = {
        name: v.name,
        ref: rv.name,
        value: rv.value,
      }
    } else {
      /**
       * Just the original name and value.
       */
      resolvedValue = {
        name: v.name,
        value: v.value,
      }
    }

    valueMap[lastSectionOfName] = resolvedValue
  }

  /**
   * Sort the tokens so related tokens group together
   * and number values order in the same way.
   */
  const sortedValueMap: typeof valueMap = Object.entries(valueMap)
    .sort()
    .reduce((m, [k, v]) => ({ ...m, [k]: v }), {})

  result = { color: sortedValueMap }

  const OUTPUT_PATH = "./temp/tokens.json"
  await fs.writeFile(
    path.join(process.cwd(), OUTPUT_PATH),
    JSON.stringify(result, null, 2),
  )

  const StyleDictionary = StyleDictionaryPackage.extend(config)
  StyleDictionary.buildPlatform("web")
})()
