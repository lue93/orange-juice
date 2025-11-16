import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import sonarjs from "eslint-plugin-sonarjs";

export default [
	{
		files: ["src/**/*.ts"],
		ignores: ["**/*.d.ts", "node_modules", "dist"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				project: "./tsconfig.json",
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			sonarjs,
		},
		rules: {
			...tsPlugin.configs["eslint-recommended"].rules,
			...tsPlugin.configs.recommended.rules,
			"sonarjs/cognitive-complexity": ["warn", 15],
			complexity: ["warn", { max: 10 }],
		},
	},
];
