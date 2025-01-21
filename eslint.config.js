import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,

    {
        files: ["*.jsx", "*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: eslintReact,
            prettier: prettierPlugin,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            "prettier/prettier": "error",
            "no-console": "warn",
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
        },
    },

    {
        ignores: ["node_modules", "dist"],
    },
];
