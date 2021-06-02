/*
 * @,@Description: ,: 不要在该奋斗的年纪选择去偷懒，只有度过一段连自己都被感动了的日子，才会变成那个最好的自己
 * @,@version: ,: 0.0.1
 * @,@Company: ,: 快乐青年
 * @,@Author: ,: 李凯
 * @,@Date: ,: 2021-04-08 04:46:52
 * @,@LastEditors: ,: 林深
 * @,@LastEditTime: ,: 2021-05-24 21:51:05
 */
module.exports = {
  "title": "林深的博客",
  "description": "林深的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "文档历史",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/javaScript/": [
        "",
        "jsProcess"
      ],
      "/docs/webpack/": [
        ""
      ],
      "/docs/informal/": [
        "",
        "reactSwiper",
        "htmlCss",
        "vscodeSetting"
      ],
      "/docs/algorithm/": [
        "",
        "timeComplexity",
        "spatialComplexity",
        "stack",
        "linkedList"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "林深",
        "email": "13718327716@163.com",
      },
      {
        "title": "掘金",
        "avatar": "https://vuepress-informal.recoluan.com/icon_vuepress_reco.png",
        "link": "https://juejin.cn/post/6844904119782604807"
      },
      {
        "title": "github",
        "avatar": "https://vuepress-informal.recoluan.com/icon_vuepress_reco.png",
        "link": "https://github.com/"
      },
      {
        "title": "码云",
        "avatar": "https://vuepress-informal.recoluan.com/icon_vuepress_reco.png",
        "link": "https://gitee.com/yichengliuxu_admin/dashboard/projects"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "林深",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}
