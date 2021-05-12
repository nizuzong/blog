###
 # @,@Description: ,: 不要在该奋斗的年纪选择去偷懒，只有度过一段连自己都被感动了的日子，才会变成那个最好的自己
 # @,@version: ,: 0.0.1
 # @,@Company: ,: 快乐青年
 # @,@Author: ,: 李凯
 # @,@Date: ,: 2021-05-12 20:14:30
 # @,@LastEditors: ,: 李凯
 # @,@LastEditTime: ,: 2021-05-12 20:15:08
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/nizuzong/nizuzong.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -