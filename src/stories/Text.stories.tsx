import type { Meta, StoryObj } from "@storybook/react"

import { Text } from "../components/typography/Text"

const meta = {
  title: "Foundations/Typography/Text",
  component: Text,
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

const TEXT = "The quick brown fox jumped over the lazy dog"

export const Default: Story = {
  args: {
    as: "p",
    children: TEXT,
  },
}

export const Overview: Story = {
  args: {
    as: "p",
    children: TEXT,
  },
}
