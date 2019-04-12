module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery": true,
        "amd": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        indent: [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            (require("os").EOL === "\r\n" ? "windows" : "unix")
        ],
        "quotes": 0,
        "semi": 0,
        "no-console": 0,
        "no-unused-vars": 0,
        "no-use-before-define": [
            "error", 
            {
                "variables": true,
                "functions": true, 
                "classes": true 
            }
        ],
        "no-trailing-spaces": 1
    },
    "globals": {
        "React": true,
        "ReactDOM": true
    }
};