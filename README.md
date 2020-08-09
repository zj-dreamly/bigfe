## 开启大前端的大门

### 设计网站

- 花瓣网
- 站酷
- 蓝色理想
- 包图网

### 需求分析工具

#### 原型类

- Axure，PS，墨刀，蓝湖
- 

#### 思维脑图

- Xmind，MindNode，MindManager

#### 流程图

Visio，OmniGraffle，processOn

### 环境准备

**win10自带虚拟机**

- Hyper-V

**DOClever**

- mock接口开发测试
- mock.js

### 前端工程化

前端工程化是指将前端开发的流程规范化，标准化，包括开发流程，技术选型，代码规范，构建发布等，用于提升前端工程师的开发效率和代码质量

#### npm

- node 包管理工具，不再赘述

#### npx

- npx 想要解决的主要问题，就是调用项目内部安装的模块
- http://www.ruanyifeng.com/blog/2019/02/npx.html

#### webpack

**快速创建npm项目**

```javascript
npm init -y
```

**安装webpack**

```javascript
yarn add webpack webpack-cli -D
```

#### gulp

**官方网站**：https://gulpjs.com.cn

**开发热编译，浏览器自动刷新**

- https://www.browsersync.io/

#### Yeoman

Yeoman 是一种高效、开源的 Web 应用脚手架搭建系统，意在精简开发过程。Yeoman 因其专注于提供脚手架功能而声誉鹊起，它支持使用各种不同的工具和接口协同优化项目的生成。

安装

```javascript
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