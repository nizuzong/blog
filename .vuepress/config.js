/*
 * @,@Description: ,: 不要在该奋斗的年纪选择去偷懒，只有度过一段连自己都被感动了的日子，才会变成那个最好的自己
 * @,@version: ,: 0.0.1
 * @,@Company: ,: 快乐青年
 * @,@Author: ,: 李凯
 * @,@Date: ,: 2021-04-08 04:46:52
 * @,@LastEditors: ,: 林深
 * @,@LastEditTime: ,: 2021-06-21 23:47:05
 */
const moment = require('moment')
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
  "theme": "reco", // vuepress-theme-realwds   reco yuu
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
      "/docs/questions/": [
        "",
      ],
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
        "vscodeSetting",
        "modelConfig"
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
    "sidebar": "auto",
    "lastUpdated": "最后更新时间",
    "author": "林深",
    "authorAvatar": "/avatar.jpeg",
    "record": "浙ICP备2020036024号-X",
    "startYear": "2021",
    //私有仓库key和密码
    // keyPage: {
    //   keys: ['123456'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        description: 'shizuku',
        theme: ['shizuku'], // , 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'blackCat', 'wanko', 'miku', 'z16'
        clean: false,
        messages: {
          welcome: '欢迎来到',
          home: '不积跬步无以至千里',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ],
    [
      '@vuepress/last-updated',
      {
          transformer: (timestamp, lang) => {
              moment.locale(lang)
              return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
          }
      }
    ],
    // [
    //   "ribbon",
    //   {
    //     size: 90,     // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1    // z-index property of the background, default: -1
    //   }
    // ],
    [
      //鼠标点击特效 先安装在配置， 
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],          // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题 先安装在配置， 
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    // 自动生成侧边栏的插件
    [
      'vuepress-plugin-auto-sidebar', {
          collapse: {
              open: true
          }
      }
  ],
    [
      //图片放大插件 先安装在配置， npm install @vuepress-plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    [
     //插件广场的流程图插件 先安装在配置 
      'flowchart'
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 
      tip: {
        content: "复制成功"
      }
    }
  ],
  [
    "@mr-hope/reading-time",
    {
      // 你的选项
      minutes: 1,
      words: 300
    },
  ],
  ["sakura", {
    num: 20,  // 默认数量
    show: true, //  是否显示
    zIndex: -1,   // 层级
    img: {
      replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...'     // 绝对路径
    }     
}]
  ]
}
