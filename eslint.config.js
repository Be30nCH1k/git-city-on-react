import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // Базовая конфигурация ESLint
    js.configs.recommended,

    // Конфигурация для JS/JSX файлов
    {
        files: ["**/*.{js,jsx}"], // Обрабатываем только JS и JSX файлы
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
            "no-console": "off",
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": [
                "warn",
                { vars: "all", args: "after-used", ignoreRestSiblings: true },
            ],
        },
    },

    // Игнорируемые папки и файлы
    {
        ignores: ["node_modules", "dist", "build"],
    },
];
