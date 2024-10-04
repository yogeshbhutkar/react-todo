import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";


export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    files: [ "**/*.{js,mjs,cjs,jsx}" ],
    languageOptions: { 
      globals: globals.browser 
    },
    plugins: {
      prettier: prettierPlugin
    },
    settings: {
      react: {
        version: "detect",
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "space-in-parens": [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      "object-curly-spacing": [ "error", "always" ],
      "space-before-blocks": [ "error", "always" ],
      "space-infix-ops": "error",
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {
            '!': true,
            '++': false,
            '--': false,
          }
        }
      ]
    }
  }
];