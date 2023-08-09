import styled from "styled-components"

type PaddingSize = "S" | "M" | "L"

type A = {
  padding?: PaddingSize
  paddingX?: never
  paddingY?: never
}
type B = {
  padding?: never
  paddingX?: PaddingSize
  paddingY?: PaddingSize
}
type Props = A | B

export const Box = styled.div<Props>`
  ${({ padding = "M" }) => {
    if (padding === "L") return "padding: 2rem;"
    if (padding === "S") return "padding: 0.5rem;"
    return "padding: 1rem;"
  }};

  ${({ paddingX = "M" }) => {
    if (paddingX === "L") return "padding-left: 2rem; padding-right: 2rem;"
    if (paddingX === "S") return "padding-left: 0.5rem; padding-right: 0.5rem;"
    return "padding-left: 1rem; padding-right: 1rem;"
  }};

  ${({ paddingY = "M" }) => {
    if (paddingY === "L") return "padding-top: 2rem; padding-bottom: 2rem;"
    if (paddingY === "S") return "padding-top: 0.5rem; padding-bottom: 0.5rem;"
    return "padding-top: 1rem; padding-bottom: 1rem;"
  }};
`
