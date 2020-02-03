module.exports = {
    stories: ['../storybook/**/*.stories.[tj]s', '../storybook/**/*.stories.mdx'],
    addons: ['@storybook/addon-docs',
             '@storybook/addon-knobs/register'
            ],
};