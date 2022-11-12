
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  staticDirs: ['../public', '../static'],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },
}