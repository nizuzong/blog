---
title: vue3项目基本配置
date: 2021-09-12
tags: Vue3
categories: 
 - vue3
---

## 配置代码格式化

```npm
yarn add prettier -D
```
新建```.prettierrc```文件
```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true
}
```
新建```.prettierignore```忽略格式化文件

```json
/dist/*
.local
.output.js

/node_modules/**

**/*.svg
**/*.sh
```

配置```.editorconfig```

```json
root = true;
[*] # 表示所有文件使用
charset = "utf-8"; # 设置文件字符集为 utf-8
indent_size = 2  # 缩进大小
indent_style = space  # 缩进分割为空格
end_of_line = lf # 控制换行类型
trim_trailing_whitespace = true #去除行首的任意空白字符
insert_final_newline = true # 始终在文末插入一个新航

[*.md] # 表示md文件适用以下规则

max_line_length = off
trim_trailing_whitespace = false 
```