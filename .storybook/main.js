/** @type { import('@storybook/react-vite').StorybookConfig } */
const { mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [react()],
      esbuild: {
        loader: 'jsx',
        include: /src\/.*\.[jt]sx?$/,
      },
      resolve: {
        alias: {
          react: require.resolve('react'),
        },
      },
    });
  },
};
export default config;
