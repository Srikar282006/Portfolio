const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  // Optional: If you need to make sure Tailwind can find all source files
  // You can use a webpack override, but the PostCSS fix is usually enough.
  webpack: {
    configure: (webpackConfig) => {
      // Find the rule that handles CSS files
      const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);

      if (oneOfRule) {
        // Find the rule that handles the main CSS/SASS files
        const cssRule = oneOfRule.oneOf.find(
          (rule) => rule.test && rule.test.toString().includes('css')
        );

        if (cssRule) {
          // Add the node_modules path to be processed by Tailwind/PostCSS
          // This is a common fix to ensure DaisyUI is processed correctly.
          if (Array.isArray(cssRule.include)) {
            cssRule.include.push(path.resolve(__dirname, 'node_modules/daisyui'));
          }
        }
      }
      return webpackConfig;
    },
  },
  // Optionally disable the default CRA build errors for module imports
  // to avoid issues with some dependencies.
  // eslint: {
  //   enable: false,
  // },
};