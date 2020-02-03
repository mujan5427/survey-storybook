import React from 'react';

export default {
  title: 'Introduction | Basic'
};

export const Introduction = () => {
    return (
      <div>
        <h3>Introduction</h3>
        <p>
          Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.
        </p>
        <p>
          Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.
        </p>
        <p>Storybook also supports a lot of <a href="/docs/addons/introduction">addons</a> and comes with a flexible API to customize Storybook as desired.
A <a href="/docs/basics/exporting-storybook">Static version</a> of Storybook can also be built and deployed to an HTTP server.</p>
        <p>Here are some featured Storybooks to see how it works:</p>
      </div>
    );
}