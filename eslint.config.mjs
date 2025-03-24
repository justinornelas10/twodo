import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
), {
    languageOptions: {
        globals: {
            ...globals.node,
            defineProps: "readonly",
            defineEmits: "readonly",
            defineExpose: "readonly",
        },
    },

    rules: {
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        indent: ["error", 4],
        "space-infix-ops": "error",
        "space-before-blocks": "error",

        "vue/html-indent": ["error", "tab", {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
        }],

        "vue/html-closing-bracket-newline": ["error", {
            singleline: "never",
            multiline: "never",
        }],

        "vue/html-self-closing": ["error", {
            html: {
                void: "always",
                normal: "always",
                component: "always",
            },

            svg: "always",
            math: "always",
        }],

        "vue/max-attributes-per-line": ["error", {
            singleline: {
                max: 10,
            },

            multiline: {
                max: 10,
            },
        }],

        "vue/singleline-html-element-content-newline": "off",
        "vue/attribute-hyphenation": "off",
        "vue/no-unused-vars": "error",
        "no-debugger": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-reserved-component-names": "off",
    },
}];