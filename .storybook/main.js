module.exports = {
    stories: ['../storybook/**/*.stories.[tj]s',],
    addons: [
      'storybook-readme/register',
      '@storybook/addon-knobs/register',
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.module.rules.push({
          test: /\.md$/,
          use: [
            {
              loader: 'markdown-loader',
            }
          ]
        });
    
        // Return the altered config
        return config;
      },
};
