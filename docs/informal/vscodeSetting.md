---
title: vscode中setting配置
date: 2021-05-12
tags: 随笔
categories: 
 - 随笔
---
```json
{
	"prettier.eslintIntegration": true,
	// 格式化stylus, 需安装Manta's Stylus Supremacy插件
	"stylusSupremacy.insertColons": false, // 是否插入冒号
	"stylusSupremacy.insertSemicolons": false, // 是否插入分好
	"stylusSupremacy.insertBraces": false, // 是否插入大括号
	"stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
	"stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
	"vetur.validation.template": false,
	"explorer.confirmDragAndDrop": false,
    "vetur.experimental.templateInterpolationService": false,
	"fileheader.customMade": {
		"Description": "不积跬步，无以至千里",
		"version": "0.0.1",
		"Company": "",
		"Author": "林深",
		"Date": "Do not edit", // 文件创建时间(不变)
		"LastEditors": "林深", // 文件最后编辑者
		"LastEditTime": "Do not edit" // 文件最后编辑时间
},
	"comment-ts.includeAuthorTag": true,
    "comment-ts.includeDescriptionTag": true,
    "commentTranslate.targetLanguage": "zh-CN",
    "commentTranslate.multiLineMerge": true,
    "docthis.authorName": "林深",
    "docthis.includeDescriptionTag": true,
    "docthis.includeAuthorTag": true,
    "docthis.includeDateTag": true,
    "docthis.enableHungarianNotationEvaluation": true,
    "docthis.inferTypesFromNames": true,
    "comment-ts.authorName": "林深",
    "eslint.alwaysShowStatus": true,
    "window.restoreWindows": "all",
    "terminal.integrated.commandsToSkipShell": [
        "psl.stepIn",
        "psl.stepOut",
        "psl.stepOver",
        "psl.sendToHostTerminal"
    ],
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
    "eslint.validate": [
        "html",
        "vue",
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
    ],
    "eslint.options": {
        "extensions": [
            ".html",
            ".js",
            ".vue",
            ".jsx",
            ".ts",
            ".tsx",
            ".d.ts"
        ]
    },
	"editor.tabSize": 2, //制表符符号eslint
	"eslint.autoFixOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    }, //保存时自动将代码按ESLint格式进行修复
}

```