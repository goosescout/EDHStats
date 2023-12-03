module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "eslint:recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "@typescript-eslint", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "camelcase": [
      "error",
      { "properties": "never", "ignoreDestructuring": true }
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true
      }
    ],
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "sibling"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "src/**",
            "group": "internal",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        "patterns": [
          {
            "group": ["../*"],
            "message": "No relative imports."
          }
        ]
      }
    ]
  },
}
