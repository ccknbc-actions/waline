<!--
 * @Author: CCKNBC ccknbc@qq.com
 * @Date: 2022-08-29 23:46:58
 * @LastEditors: CCKNBC ccknbc@qq.com
 * @LastEditTime: 2022-09-04 22:13:19
 * @FilePath: \waline\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Waline Example

This directory is a brief example of a [Waline](https://waline.js.org/) app that can be deployed with Vercel and zero configuration.

## Deploy Your Own

Deploy your own Waline project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ccknbc-actions/waline)

### How We Created This Example

```js
//index.js
const Waline = require('@waline/vercel');
module.exports = Waline();

//vercel.json
{
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node@2.5.10"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

### Deploying From Your Terminal

You can deploy your new Waline project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```
