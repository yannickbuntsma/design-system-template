import type { Meta, StoryObj } from "@storybook/react"

import { Text } from "../components/typography/Text"
import { Title } from "../components/typography/Title"

const meta = {
  title: "Foundations/Typography/Font pairing",
  component: Text,
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

const TEXT = "The quick brown fox & the hyperactive jumping dog"

export const Default: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
      <Title as="h2">{TEXT}</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        placeat itaque commodi porro molestias, quos alias facere, nostrum
        temporibus repellendus corrupti dicta nisi quo modi sit voluptatem enim
        in maiores?
      </Text>
    </div>
  ),
}
