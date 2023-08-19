import type { Meta, StoryObj } from "@storybook/react"

import { Title } from "../components/typography/Title"

const meta = {
  title: "Foundations/Typography/Title",
  component: Title,
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

const TEXT = "The quick brown fox jumped over the lazy dog"

export const Default: Story = {
  args: {
    as: "h2",
    children: TEXT,
  },
}

export const Overview: Story = {
  args: {
    as: "h2",
    children: TEXT,
  },
  render: (args) => (
    <div
      style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "2rem" }}
    >
      <span>Normal</span>
      <Title
        {...args}
        variant="normal"
        as="span"
      />
      <span>Big</span>
      <Title
        variant="big"
        {...args}
      />
      <span>Huge</span>
      <Title
        variant="huge"
        {...args}
      />
    </div>
  ),
}
