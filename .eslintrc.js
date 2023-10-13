module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: "eslint:recommended",
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	globals: {
		process: true,
	},
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: 0,
		"no-unused-vars": 0,
	},
};
