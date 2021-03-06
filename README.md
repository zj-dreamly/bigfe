## 开启大前端的大门

### 设计网站

- 花瓣网
- 站酷
- 蓝色理想
- 包图网

### 需求分析工具

#### 原型类

- Axure，PS，墨刀，蓝湖

#### 思维脑图

- Xmind，MindNode，MindManager

#### 流程图

- Visio，OmniGraffle，processOn

#### 文档管理

- showdoc：https://www.showdoc.com.cn/

### 环境准备

**win10自带虚拟机**

- Hyper-V

**DOClever**

- mock接口开发测试
- mock.js
- json server

### 前端工程化

前端工程化是指将前端开发的流程规范化，标准化，包括开发流程，技术选型，代码规范，构建发布等，用于提升前端工程师的开发效率和代码质量

#### npm

- node 包管理工具，不再赘述

#### nvm

-  nvm全名node.js version management，顾名思义是一个nodejs的版本管理工具

#### npx

- npx 想要解决的主要问题，就是调用项目内部安装的模块
- http://www.ruanyifeng.com/blog/2019/02/npx.html

#### webpack

**快速创建npm项目**

```shell script
npm init -y
```

**安装webpack**

```shell script
yarn add webpack webpack-cli -D
```

#### gulp

**官方网站**：https://gulpjs.com.cn

**开发热编译，浏览器自动刷新**

- https://www.browsersync.io/

#### Yeoman

Yeoman 是一种高效、开源的 Web 应用脚手架搭建系统，意在精简开发过程。Yeoman 因其专注于提供脚手架功能而声誉鹊起，它支持使用各种不同的工具和接口协同优化项目的生成。

安装

```shell script
npm install -g yo
```

- 全局yo命令安装，安装命令`yo<package>`, 脚手架的名称是generator-打头，如`yo brian-imooc`
- 使用generator-generator快速创建脚手架项目，全局安装：`npm install -g generator-generator`
- 使用npm进行发布：link命令本地测试，发布时设置`npm registry`

### Koa

Koa是一个全新的web框架，致力于成为web应用和API开发领域中的一个更小，更富有表现力，更健壮的基石。

利用async函数丢弃回调函数，并增强错误处理，Koa没有任何预置的中间件，可快速而愉快的编写服务端应用程序。

#### 工作原理

- 执行顺序：顺序执行
- 回调的顺序：反向执行
- 先进后出，类似洋葱模型
- next之前属于顺序执行，next之后属于回调，反向执行

#### 常用中间件

- koa-router
- koa-combine-routers
- koa-bodyparser
- koa-views
- koa-static
- koa-session
- koa-jwt
- koa-helmet
- koa-compress
- koa-logger

#### 开发热加载

- nodemon

### 前端框架

- 类库：JQuery，Lodash（Underscore）
- JS库：React，Vue，Angular，ExtJS，Backbone
- 工具：Webpack（Build），Jest（Test），ESLint，Template，应用类（Echarts/D3/three）

#### 校验工具

- Vuelidate
- Veevalidate

#### 工具类

- nodemailer
- captcha
- uuid
- bcrypt
- npm-run-all
- qs
- lodash
- moment
- jsonwebtoken
- dayjs
- make-dir

### VS code插件

- Node modules Resolve 

### Vue-Router

#### exact-active-class

- linkActiveClass 

- 类型: `string`

- 默认值: `"router-link-exact-active"`

  配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 `linkExactActiveClass` 进行全局配置的。

#### router跳转

- 建议都使用name属性来进行跳转，path如何变更都不会受到影响

- ```javascript
  <router-link :to="{name: 'user'}">用户</router-link>
  ```

- ```javascript
  this.$router.push({ name: 'index' })
  ```

#### :class

Class 与 Style 绑定

#### scoped

```vue
<style lang="scss" scoped></style>
```

带上scoped只对当前组件生效，去掉scoped对当前组件及其子组件都有效

#### require.context

#### label

label 标签为 input 元素定义标注（标记）。

label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

label 标签的 for 属性应当与相关元素的 id 属性相同。

#### 三元运算符

当在模板中使用嵌套对象的话，但是在Data中没有定义，可以使用三元运算符进行判断，存在才去获取

#### Websocket

- ws ：实现原生协议，特点是通用性强，性能高，定制性强
- socket.io：向下兼容协议，适配性强，性能一般

#### SSR

| 分类     | Vue.js                   | Nuxt.js                                      |
| -------- | ------------------------ | -------------------------------------------- |
| 框架     | 独立框架                 | 基于vue.js，不仅用于服务端渲染，还进行了丰富 |
| 生命周期 | 全                       | 只有created，beforeCreated                   |
| 组件     | router-view，router-link | nuxt, nuxt-child, nuxt-link, client-only     |
| 路由     | 自定义                   | 由文件名，文件夹自动生成                     |
| 目录结构 | 自定义                   | 相对限定，不同的文件名不同的默认行为         |
| 第三方库 | 自定义                   | 需求分浏览器和node测                         |
| 其他     | cli集成了vuex，router    | prettier UI框架等                            |

- Server-Side Rendering (ssr) 服务端渲染是用户第一次请求刷新页面的时候，由服务端响应HTML字符串，可以省去浏览器端首次渲染的工作，加快首屏显示速度。
- CSR
- 更好的SEO
- 更快的内容到达时间 (time to content)
- vue & vue-server-renderer2.3.0+
- Nuxt.js框架

#### Nuxt.js 开发

- 安装：`npx create-nuxt-app <project-name>`
- 配置vscode插件 vetur
- 认识 Nuxt 工程化目录
- SPA应用缺陷
- Universal Mode

### WebApp

- 类App应用，运行环境是浏览器
- 可以包一层壳，成为App
- 常见的混合应用：ionic，cordova，appcan，uni-app
- 原生应用：ReactNative，flutter
- 桌面应用：Electron

#### Mint UI

#### 工具类

- svg-sprite
- svg-sprite-loader
- normalize.css
- postcss-px-to-viewport
- postcss-pxtorem

#### 处理微信下拉出现域名信息

- 工具类

  ```javascript
  export const forbidScroll = (elem) => {
    let flag = false
  
    elem.addEventListener('touchstart', (evt) => {
      if (elem.contains(evt.target)) {
        flag = true
      } else {
        flag = false
      }
    }, false)
    elem.addEventListener('touchmove', (evt) => {
      evt.prop = flag
    })
  }
  
  const handler = (evt) => {
    if (evt.prop) {
      evt.preventDefault()
    }
  }
  
  document.body.removeEventListener('touchmove', handler, { passive: false })
  document.body.addEventListener('touchmove', handler, { passive: false })
  
  ```

  

- 使用

```javascript
  mounted () {
    const elem = this.$refs.search
    window.forbidScroll(elem)
  },
```

#### 横竖屏兼容方案

- 媒体查询