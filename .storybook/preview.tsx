import React from "react"
import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { GlobalStyle } from "../src/globalStyles"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        radio: /(variant|as)$/i,
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
