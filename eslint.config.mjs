import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            onlyWarn,
        },
    },
    {
        ignores: ["scripts/**"],
    },
    {
        rules: {
            "no-console": ["error", { allow: ["warn", "error"] }],
            "@typescript-eslint/no-unused-expressions": "off"
        }
    },
    {
        files: ["tests/**/*.ts", "**/*.test.ts"],
        rules: {
            "no-console": "off"
        }
    }
];
