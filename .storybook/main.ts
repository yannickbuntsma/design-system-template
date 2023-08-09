import type { StorybookConfig } from "@storybook/react-vite"

const EXCLUDED_PROPS = ["as", "forwardedAs", "theme", "ref"]

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true) &&
        EXCLUDED_PROPS.indexOf(prop.name) < 0,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
}
export default config
