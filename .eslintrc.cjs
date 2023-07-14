module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
        "react-hooks"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
    },
    "settings": { 
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx", ".js"] 
        }, 
        "import/resolver": { 
            "typescript": "./tsconfig.json" 
        }
    }

}
