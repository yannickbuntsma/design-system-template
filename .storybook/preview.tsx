import React from "react"
import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { GlobalStyle } from "../src/globalStyles"
import "../src/styles/tokens.css"

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        radio: /(variant|as)$/i,
      },
    },
    options: {
      storySort: {
        order: ["Foundations", ["Typography"], "*"],
      },
    },
  },

  decorators: [
    (story) => (
      <>
        <GlobalStyle />
        {story()}
      </>
    ),
    withThemeFromJSXProvider({}),
  ],
}

export default preview
