import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        files: ["**/*.js", "**/*.jsx"], // Применяем правила к JS и JSX файлам
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
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
            prettier: pluginPrettier,
            react: pluginReact,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...pluginReact.configs.recommended.rules,
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "no-unused-vars": "warn",
            "no-undef": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        ignores: [
            "build/**", // Игнорируем все файлы и папки внутри build
            "public/**", // Игнорируем все файлы и папки внутри public
            "**/*.css", // Игнорируем CSS файлы во всех папках
            "**/*.html", // Игнорируем HTML файлы во всех папках
            "**/*.md", // Игнорируем Markdown файлы во всех папках
            "**/*.jpg", // Игнорируем изображения во всех папках
            "**/*.png",
            "**/*.svg",
            "**/*.webp",
            "**/*.gif",
        ],
    },
];
