---
title: vscode中setting配置
date: 2021-05-12
---
```json
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复,vscode es6语法检测配置
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // "eslint.autoFixOnSave": true,
  "explorer.confirmDragAndDrop": false,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // 使能每一种语言默认格式化规则
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  /*  prettier的配置 */
  // "prettier.printWidth": 100, // 超过最大值换行
  "prettier.tabWidth": 2, // 缩进字节数
  "prettier.useTabs": false, // false缩进不使用tab，使用空格
  "prettier.semi": true, // true句尾添加分号
  "prettier.singleQuote": true, // true使用单引号代替双引号
  "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "prettier.disableLanguages": [
    "vue"
  ], // 不格式化vue文件，vue文件的格式化单独设置
  "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
  "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
  "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
  "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
  "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
  "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  "prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
  // ===========以下4个是控制保存时自动格式化的，并且以4格缩进================
  "editor.tabCompletion": "on",
  // ===========以下是根据自己需求配置的============================
  "editor.suggest.snippetsPreventQuickSuggestions": true, //自动补全的
  "explorer.confirmDelete": true, // 自动补全
  "[json]": {},
  "workbench.sideBar.location": "left",
  "editor.wordWrap": "on", // 控制折行方式。可以选择： - “off” （禁用折行）， - “on” （视区折行）， - “wordWrapColumn”（在“editor.wordWrapColumn”处折行）或 - “bounded”（在视区与“editor.wordWrapColumn”两者的较小者处折行）。
  "editor.fontSize": 17,
  // 两个选择器中是否换行
  "editor.formatOnType": true,
  "editor.parameterHints": true,
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "git.confirmSync": true, // *** 这个是提示空格的点点
  "typescript.format.insertSpaceAfterSemicolonInForStatements": false,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html",
    "javascript": "javascriptreact",
    "wxml": "html"
  },
  "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'", //  这个是控制字体样式的
  "auto-close-tag.activationOnLanguage": [
    "xml",
    "php",
    "blade",
    "ejs",
    "jinja",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "plaintext",
    "markdown",
    "vue",
    "liquid",
    "erb",
    "lang-cfml",
    "cfml",
    "HTML (Eex)"
  ],
  "eslint.options": {
    "extensions": [
      ".js",
      ".vue"
    ]
  },
  "editor.mouseWheelZoom": true,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "launch": {},
  "workbench.editorAssociations": [],
  "workbench.colorTheme": "Monokai",
  "terminal.integrated.env.osx": {},
  "files.autoSave": "off"
}
{
    "window.zoomLevel": 0.4,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.activityBar.visible": true,
    "terminal.integrated.fontFamily": "monospace",
    "emmet.triggerExpansionOnTab": true,
    // prettier 设置语句末尾不加分号
    "prettier.semi": false,
    // prettier 设置强制单引号
    "prettier.singleQuote": true,
    "explorer.confirmDelete": false,
    "files.associations": {
        "*.vue": "html",
        "*.wxss": "css",
    },
    "editor.lineNumbers": "on", //打开行号
    "editor.quickSuggestions": {
    //开启自动显示建议
        "other": true,
        "comments": true,
        "strings": true
    },
  "editor.tabSize": 2, //制表符符号eslint
  "eslint.autoFixOnSave": true, //保存时自动将代码按ESLint格式进行修复
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
    //  #让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    // #让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
        "prettyhtml": {
            // 单行超过100个长度的时候开始换行
            "printWidth": 100,
            "tabWidth": 2,
            "useTabs": false,
            "singleQuote": false,
            "wrapAttributes": true,
            "sortAttributes": true,
        },
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分好
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
    "vetur.validation.template": false,
    // 选择 vue 文件中 template 的格式化工具
    "vetur.format.defaultFormatter.html": "prettyhtml",
    // 显示 markdown 中英文切换时产生的特殊字符
    "editor.renderControlCharacters": true,
    "eslint.trace.server": "messages",
    "editor.formatOnPaste": false,
    "html.format.indentInnerHtml": true,
    "html.format.endWithNewline": true,
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    },
    "explorer.confirmDragAndDrop": false,
    "vetur.experimental.templateInterpolationService": false,
    "fileheader.customMade": {
        "Description": "不要在该奋斗的年纪选择去偷懒，只有度过一段连自己都被感动了的日子，才会变成那个最好的自己",
        "version": "0.0.1",
        "Company": "快乐青年",
        "Author": "李凯",
        "Date": "Do not edit", // 文件创建时间(不变)
        "LastEditors": "李凯", // 文件最后编辑者
        "LastEditTime": "Do not edit" // 文件最后编辑时间
    },
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll": true,
        "source.fixTslint": true,
    },
    "editor.formatOnSave": true,
    "tslint.jsEnable": true,
    "cSpell.userWords": [
        "Alipay",
        "antd",
        "keyof",
        "mobx",
        "quotemark",
        "typeof"
    ],
    "typescript.updateImportsOnFileMove.enabled": "always",
    "gitlens.advanced.messages": {
        "suppressLineUncommittedWarning": true
    },
    "cSpell.enabledLanguageIds": [
        "asciidoc",
        "c",
        "cpp",
        "csharp",
        "css",
        "git-commit",
        "go",
        "handlebars",
        "html",
        "jade",
        "java",
        "javascriptreact",
        "json",
        "jsonc",
        "latex",
        "less",
        "markdown",
        "php",
        "plaintext",
        "pug",
        "python",
        "restructuredtext",
        "rust",
        "scala",
        "scss",
        "text",
        "typescriptreact",
        "yaml",
        "yml"
    ],
    "comment-ts.includeAuthorTag": true,
    "comment-ts.includeDescriptionTag": true,
    "commentTranslate.targetLanguage": "zh-CN",
    "commentTranslate.multiLineMerge": true,
    "docthis.authorName": "李凯",
    "docthis.includeDescriptionTag": true,
    "docthis.includeAuthorTag": true,
    "docthis.includeDateTag": true,
    "docthis.enableHungarianNotationEvaluation": true,
    "docthis.inferTypesFromNames": true,
    "comment-ts.authorName": "李凯",
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
    "[scss]": {
        "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "editor.formatOnType": true,
    "editor.rulers": [
        80
    ],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false,
    "python.languageServer": "Microsoft",
    "git.autofetch": true,
    "debug.javascript.autoAttachFilter": "onlyWithFlag",
    "[css]": {
        "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter"
    },
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "eggHelper.serverPort": 35684,
}
{
    "editor.tabSize": 2,
    // eslint
    "eslint.validate": [
        "javascript",
        "javascriptreact"
    ],
    // prettier
    // 默认格式化程序
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // 保存时格式化
    "editor.formatOnSave": false,
    // 保存时自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
  "comment-ts.includeAuthorTag": true,
    "comment-ts.includeDescriptionTag": true,
    "commentTranslate.targetLanguage": "zh-CN",
    "commentTranslate.multiLineMerge": true,
    "docthis.authorName": "李凯",
    "docthis.includeDescriptionTag": true,
    "docthis.includeAuthorTag": true,
    "docthis.includeDateTag": true,
    "docthis.enableHungarianNotationEvaluation": true,
    "docthis.inferTypesFromNames": true,
    "comment-ts.authorName": "李凯",
    "eslint.alwaysShowStatus": true,
    "window.restoreWindows": "all",
    "prettier.arrowParens": "always",
    "prettier.singleQuote": true,
    "prettier.trailingComma": "all",
    // 注释
    // 头部注释 ctrl+alt+i,mac：ctrl+cmd+i
    "fileheader.customMade": {
        // 头部注释默认字段
        "Description": "",
        "Author": "李凯",
        "Date": "Do not edit", // 设置后默认设置文件生成时间
        "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间
        "LastEditors": "李凯" // 设置后，保存文件更改默认更新最后编辑人
    },
    // 函数注释 ctrl+alt+t,mac：ctrl+cmd+t (被占用)
    "fileheader.cursorMode": {
        // 默认字段
        "description": "",
        "param": "none",
        "return": "none"
    },
    // 插件配置项
    "fileheader.configObj": {
        "autoAdd": true, // 检测文件没有头部注释，自动添加文件头部注释
        "autoAlready": true // 只添加插件支持的语言以及用户通过`language`选项自定义的注释
    },
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // est7
    "javascript.implicitProjectConfig.experimentalDecorators": true
}
{
    "window.zoomLevel": 0.4,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.activityBar.visible": true,
    "terminal.integrated.fontFamily": "monospace",
    "emmet.triggerExpansionOnTab": true,
    // prettier 设置语句末尾不加分号
    "prettier.semi": false,
    // prettier 设置强制单引号
    "prettier.singleQuote": true,
    "explorer.confirmDelete": false,
    "files.associations": {
            "*.vue": "html",
            "*.wxss": "css",
    },
    "editor.lineNumbers": "on", //打开行号
    "editor.quickSuggestions": {
    //开启自动显示建议
            "other": true,
            "comments": true,
            "strings": true
    },
"editor.tabSize": 2, //制表符符号eslint
"eslint.autoFixOnSave": true, //保存时自动将代码按ESLint格式进行修复
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
    //  #让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    // #让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
            "prettyhtml": {
                    // 单行超过100个长度的时候开始换行
                    "printWidth": 100,
                    "tabWidth": 2,
                    "useTabs": false,
                    "singleQuote": false,
                    "wrapAttributes": true,
                    "sortAttributes": true,
            },
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分好
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
    "vetur.validation.template": false,
    // 选择 vue 文件中 template 的格式化工具
    "vetur.format.defaultFormatter.html": "prettyhtml",
    // 显示 markdown 中英文切换时产生的特殊字符
    "editor.renderControlCharacters": true,
    "eslint.trace.server": "messages",
    "editor.formatOnPaste": false,
    "html.format.indentInnerHtml": true,
    "html.format.endWithNewline": true,
    "files.exclude": {
            "**/.classpath": true,
            "**/.project": true,
            "**/.settings": true,
            "**/.factorypath": true
    },
    "explorer.confirmDragAndDrop": false,
    "vetur.experimental.templateInterpolationService": false,
    "fileheader.customMade": {
            "Description": "不要在该奋斗的年纪选择去偷懒，只有度过一段连自己都被感动了的日子，才会变成那个最好的自己",
            "version": "0.0.1",
            "Company": "快乐青年",
            "Author": "李凯",
            "Date": "Do not edit", // 文件创建时间(不变)
            "LastEditors": "李凯", // 文件最后编辑者
            "LastEditTime": "Do not edit" // 文件最后编辑时间
    },
    "editor.codeActionsOnSave": {
            "source.organizeImports": true,
            "source.fixAll": true,
            "source.fixTslint": true,
    },
    "editor.formatOnSave": true,
    "tslint.jsEnable": true,
    "cSpell.userWords": [
            "Alipay",
            "antd",
            "keyof",
            "mobx",
            "quotemark",
            "typeof"
    ],
    "typescript.updateImportsOnFileMove.enabled": "always",
    "gitlens.advanced.messages": {
            "suppressLineUncommittedWarning": true
    },
    "cSpell.enabledLanguageIds": [
            "asciidoc",
            "c",
            "cpp",
            "csharp",
            "css",
            "git-commit",
            "go",
            "handlebars",
            "html",
            "jade",
            "java",
            "javascriptreact",
            "json",
            "jsonc",
            "latex",
            "less",
            "markdown",
            "php",
            "plaintext",
            "pug",
            "python",
            "restructuredtext",
            "rust",
            "scala",
            "scss",
            "text",
            "typescriptreact",
            "yaml",
            "yml"
    ],
    "comment-ts.includeAuthorTag": true,
    "comment-ts.includeDescriptionTag": true,
    "commentTranslate.targetLanguage": "zh-CN",
    "commentTranslate.multiLineMerge": true,
    "docthis.authorName": "李凯",
    "docthis.includeDescriptionTag": true,
    "docthis.includeAuthorTag": true,
    "docthis.includeDateTag": true,
    "docthis.enableHungarianNotationEvaluation": true,
    "docthis.inferTypesFromNames": true,
    "comment-ts.authorName": "李凯",
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
    "[scss]": {
            "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "editor.formatOnType": true,
    "editor.rulers": [
            80
    ],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false,
    "python.languageServer": "Microsoft",
    "git.autofetch": true,
    "debug.javascript.autoAttachFilter": "onlyWithFlag",
    "[css]": {
            "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter"
    },
    "eslint.codeAction.showDocumentation": {
            "enable": true
    },
    "eggHelper.serverPort": 35684,
    "workbench.colorCustomizations": {
        "terminal.background": "#181818",
        "terminal.foreground": "#0af316",
        "terminalCursor.background": "#0c0c0c",
        "terminalCursor.foreground": "#D8D8D8",
        "terminal.ansiBlack": "#181818",
        "terminal.ansiBlue": "#7CAFC2",
        "terminal.ansiBrightBlack": "#585858",
        "terminal.ansiBrightBlue": "#7CAFC2",
        "terminal.ansiBrightCyan": "#86C1B9",
        "terminal.ansiBrightGreen": "#A1B56C",
        "terminal.ansiBrightMagenta": "#BA8BAF",
        "terminal.ansiBrightRed": "#AB4642",
        "terminal.ansiBrightWhite": "#F8F8F8",
        "terminal.ansiBrightYellow": "#F7CA88",
        "terminal.ansiCyan": "#86C1B9",
        "terminal.ansiGreen": "#A1B56C",
        "terminal.ansiMagenta": "#BA8BAF",
        "terminal.ansiRed": "#AB4642",
        "terminal.ansiWhite": "#D8D8D8",
        "terminal.ansiYellow": "#F7CA88"
},
}
```