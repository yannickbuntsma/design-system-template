import type { Meta, StoryObj } from "@storybook/react"

import { Alert } from "./../components/Alert"
import { Title } from "../components/typography/Title"
import { Text } from "../components/typography/Text"

const meta = {
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "error",
    children: (
      <>
        <Title as="h2">This is an alert</Title>
        <Text>It might convey some interesting information the user would like to know.</Text>
      </>
    ),
  },
}