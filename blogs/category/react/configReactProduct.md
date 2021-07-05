---
title: 配置eslint和less module
date: 2021-07-05
tags:
 - react
categories: 
 - react-config-module
---
## 前言
目前主要使用的脚手架是```create-react-app```这个脚手架，因为不想使用```npm eject```将脚手架隐藏的配置文件暴露出来，那么有没有其他办法实现一些基本的配置呢？

主要配置```eslint```统一团队内的```代码风格```，还有呢就是使用```less module```，修改项目的主题色，这些配置。

## 第一步
__安装antd提供的craco__

```npm
yarn add @craco/craco
```
然后修改```package.json```
```json
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```
## 第二步  创建craco.config.js

__配置less module__
```npm 
yarn add less less-loader --save

```
然后在craco.config.js添加
```js
const path = require('path');
const { POSTCSS_MODES } = require('@craco/craco');

const loaderNameMatchers = (rule, loaderName) => rule && rule.loader && typeof rule.loader === 'string'
&& (rule.loader.indexOf(`${path.sep}${loaderName}${path.sep}`) !== -1
|| rule.loader.indexOf(`@${loaderName}${path.sep}`) !== -1);

const getLoader = (rules, matcher) => {
    let loader;

    // eslint-disable-next-line no-return-assign
    rules.some(rule => (loader = matcher(rule)
        ? rule
        : getLoader(rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [], matcher)));

    return loader;
};

module.exports = {
    babel: {
        plugins: [
            [
                'import',
                {
                    libraryName      : 'antd',
                    libraryDirectory : 'es',
                    style            : true,
                },
            ],
        ],
    },
    style: {
        postcss: {
            mode: POSTCSS_MODES.file,
        },
    },
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    // 处理js不带hash
                    // eslint-disable-next-line no-param-reassign
                    webpackConfig.output = Object.assign(webpackConfig.output || {}, {
                        filename      : 'static/js/[name].main.js',
                        chunkFilename : 'static/js/[name].chunk.js',
                    });
                    const lessExtension = /\.less$/;
                    // 处理css
                    const oneOfRule = webpackConfig.module.rules.find(rule => (
                        typeof rule.oneOf !== 'undefined'
                    ));

                    // eslint-disable-next-line no-param-reassign
                    webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
                        if (plugin.constructor.name === 'MinCssExtractPlugin') {
                            Object.assign(plugin.options, {
                                filename      : 'static/css/[name].css',
                                chunkFilename : 'static/css/[name].css',
                            });
                        }

                        return plugin;
                    });
                    const appendTo = oneOfRule ? oneOfRule.oneOf : webpackConfig.module.rules;
                    // 处理less
                    const fileLoader = getLoader(
                        webpackConfig.module.rules,
                        rule => loaderNameMatchers(rule, 'file-loader'),
                    );
                    fileLoader.exclude.push(lessExtension);

                    const lessRules = {
                        oneOf: [{
                            test : lessExtension,
                            use  : [
                                {
                                    loader: require.resolve('style-loader'),
                                },
                                {
                                    loader: require.resolve('css-loader'),
                                },
                                {
                                    loader  : require.resolve('postcss-loader'),
                                    // eslint-disable-next-line global-require
                                    options : require('./postcss.config'),
                                },
                                {
                                    loader  : require.resolve('less-loader'),
                                    options : {
                                        lessOptions: {
                                            strictMath        : false,
                                            javascriptEnabled : true,
                                            modifyVars        : { '@primary-color': '#646cff' },
                                        },
                                    },
                                },
                            ],
                        }],
                    };
                    appendTo.push(lessRules);

                    return webpackConfig;
                },
            },
        },
    ],
    webpack: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        plugins: [],
    },
};
```
## 第三步 创建postcss.config.js

```js
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            overrideBrowserslist: ['> 0.15% in CN'],
        }),
    ],
};
```
因为在项目中主要使用的```TypeScript```，所以还要配置一下```tsconfig.json```文件

我们需要新建一个```tsconfig.base.json```
```npm
touch tsconfig.base.json
```
__内容__
```json

{
	"compilerOptions": {
		"target": "es6",
		"lib": [
			"dom",
			"dom.iterable",
			"esnext"
		],
		"paths": {
			"src/*": [
				"src/*"
			],
			"@/*": [
				"src/*"
			]
		},
		"baseUrl": ".",
		"noUnusedLocals": false,
		"allowJs": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": false,
		"noFallthroughCasesInSwitch": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"typeRoots": [
			"./node_modules/@types",
			"./src/typings/**.d.ts"
		],
	},
	"include": [
		"src"
	]
}
```

__修改tsconfig,json__

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "noUnusedLocals": false,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "typeRoots": [
      "./node_modules/@types",
      "./src/typings/**.d.ts" // 声明全局的ts文件
    ]
  }
}
```
## 第四步 配置eslint

```npm
yarn add eslint-config-airbnb --save

yarn add eslint-config-node --save

yarn add eslint-config-standard --save

yarn add eslint-config-standard-react --save

yarn add eslint-plugin-jsx-a11y --save

yarn add eslint-plugin-node --save

yarn add eslint-plugin-promise --save

yarn add eslint-plugin-react --save

yarn add eslint-plugin-react-hooks --save

yarn add eslint-plugin-standard --save
```
安装完成之后，新建```.eslintrc```
```npm
touch .eslintrc
```

__.eslintrc__
```json
{
	"root": true,
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"commonjs": true
	},
	"extends": [
		"standard",
		"standard-react",
		"airbnb"
	],
	"plugins": [
		"react-hooks",
		"@typescript-eslint"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"import/no-unresolved": "off",
		"indent": [
			"error",
			4
		],
		"semi": [
			2,
			"always"
		],
		"react/jsx-indent": [
			1,
			4
		],
		"react/require-default-props": "off",
		"no-trailing-spaces": "off",
		"eol-last": "off",
		"key-spacing": [
			"error",
			{
				"align": {
					"beforeColon": true,
					"afterColon": true,
					"on": "colon",
					"mode": "strict"
				}
			}
		],
		"no-shadow": "off",
		"react/jsx-closing-bracket-location": [
			0,
			"props-aligned"
		],
		"react/jsx-indent-props": [
			2,
			4
		],
		"no-restricted-globals": "off",
		"jsx-ally/interactive-supports-focus": "off",
		"jsx-ally/no-static-element-interactions": "off",
		"jsx-ally/click-events-have-key-events": "off",
		"jsx-ally/no-noninteractive-element-interactions": "off",
		"consistent-return": "off",
		"no-tabs": "off",
		"react/sort-comp": "off",
		"max-len": "off",
		"standard/no-callback-literal": "off",
		"no-unused-expressions": "off",
		"promise/param-names": "off",
		"arrow-parens": "off",
		"react/destructuring-assignment": "off",
		"class-methods-use-this": "off",
		"import/extensions": "off",
		"camelcase": "off",
		"react/self-closing-comp": "off",
		"react/jsx-filename-extension": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
		"padding-line-between-statements": [
			"error",
			{
				"blankLine": "always",
				"prev": "*",
				"next": [
					"if"
				]
			},
			{
				"blankLine": "always",
				"prev": [
					"block-like"
				],
				"next": "*"
			}
		]
	},
	"overrides": [
		{
			"files": [
				"**/*.ts",
				"**/*.tsx"
			],
			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaFeatures": {
					"jsx": true
				},
				"project": [
					"./tsconfig.json"
				]
			},
			"rules": {
				"spaced-comment": "off",
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": [
					"error"
				],
				"no-undef": "off",
				"import/extensions": "off",
				"react/prop-types": "off",
				"react-hooks/rules-of-hooks": "error",
				"import/prefer-default-export": "off",
				"no-use-before-define": "off",
				"no-unused-expressions": "error",
				"@typescript-eslint/no-use-before-define": [
					"error"
				]
			}
		}
	]
}
```

不要急，到这里还没完， 需要新建一个```.editorconfig```配置文件
```npm 
touch .editorconfig
```
__.editorconfig__
```text
root = true

# all files
[*]
charset = utf-8
indent_style = tab
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# md files
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```

## 最后附上我的vscode中的settings.json的配置

__settings.json__
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
    "terminal.integrated.commandsToSkipShell": [
        "terminalTabs.createTerminal"
      ],
      "editor.fontFamily":"Menlo, Monaco, 'Courier New', monospace,Meslo LG L for Powerline",
}
```

好了，到这里就结束了~~