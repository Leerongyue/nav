# 使用帮助
## parcel help
```
yarn global add parcel-bundler;//安装parcel
parcel src/index.html;//预览index.html
```
##  npm run-script build一键发布
```
yarn init -y;//生成package.json
"scripts": {"build": "rm -rf dist && parcel build src/index.html --no-minify --public-url ./"};//package.json中加入脚本
npm run-script build;//一键发布
```
## yarn build一键发布
```
yarn init -y;//生成package.json
"scripts": {"build": "rm -rf dist && parcel build src/index.html --no-minify --public-url ./"};//package.json中加入脚本
yarn build;//一键发布
```
