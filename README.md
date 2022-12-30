<p style="display:flex;justify-content:center">

</p>

<div align="center">
	<h1>vue-easy-page</h1>
</div>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/">
    <img src="https://img.shields.io/node/v/vite.svg" alt="node compatility">
  </a>
  <a href="https://github.com/Tencent/tdesign-vue-next/blob/develop/LICENSE">
    <img src="https://img.shields.io/npm/l/tdesign-vue-next.svg?sanitize=true" alt="License">
  </a>
</p>

简体中文 | [English](./README-EN.md) | [重构进度](./README-EN.md) 

### 框架介绍
<span style="background-color:#0052d9;color:white">Vue-easy-page </span>是一个基于<a>TDesign-vue</a>框架重构出来的.使用了原始的TDesign-vue框架的计算能力。主要是对部分底层的逻辑代码重构,更符合现在前端开发的需求。配合TDesign-vue的开箱即用、配置式的中后台框架,加入了Responsive和Composed的逻辑封装,实现了清晰的开发标准、加大开发效率、降低开发难度。同时也充分体现在Vue.js在3.X构建基础上体现出来的<span style="background-color:#0052d9;color:white" >响应式和组合式编程</span>思想

### 数据驱动到响应式与组合式
从Vue.js 2.x 版本来看,其实整个Vue生态圈都是围绕着数据驱动式开发<span style="background-color:#be5a00;color:white">(data-driven development)</span>。即开发重点关注的是数据的渲染和事件的交互。3.x版本的Vue.js我仔细研究了一下,其实尤大更推崇的是响应式和组合式的编程,来代替选项式<sapn style="background-color:#be5a00;color:white">(Options)</sapn>的前端编程。如何践行响应式与组合式<span style="background-color:#be5a00;color:white">(Responsive & Composed Method)</span>的开发模式。我会在下面的开发文档中与原始<a>tdesign-vue-next-starter</a>封装的代码做比较,传到我理解的响应式和组合式的开发模式

### 开发和提交约束

### 重构目录结构
```
vue-easy-page
├─ ...                        
├─ public                   # 静态资源文件
├─ src
│  ├─ ...                
│  ├─ page                        # 后台页面
│  │  ├─ pageA                    # 页面A
│  │  └─ pageB                    # 页面B
│  │     ├─ components            # 页面B的组件
│  │     │  ├─ compA              # 组件A
│  │     │  └─ compB              # 组件B
│  │     ├─ columns               # Table响应
│  │     │  ├─ columns.ts         # Table的Column响应
│  │     │  └─ columns.tsx        # Columns的Render
│  │     ├─ responsive            # 响应&组合
│  │     │  └─ index.ts           # 响应&组合入口
│  │     ├─ index.vue             # 页面B的入口
│  |     └─ index.scss            # 页面B的样式      
│  └─ ...           
├─ .env                   # vite 常用配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.config.js  # prettier 配置
├─ index.html             # 入口 html
├─ yarn.lock              # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```

### 微信交流
|                                      微信二维码                                      |
| :----------------------------------------------------------------------------------: |
| <img src="./imgs/wechat.JPG" width=500/> 