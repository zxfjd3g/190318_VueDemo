## 1. vue脚手架

    用来创建vue项目的工具包
    创建项目:
        npm install -g vue-cli
        vue init webpack VueDemo
    开发环境运行:
        cd VueDemo
        npm install
        npm run dev
    生产环境打包发布
        npm run build
        npm install -g serve
        serve dist
        http://localhost:5000


## 2. eslint
    用来做项目编码规范检查的工具
    基本原理: 定义了很多规则, 检查项目的代码一旦发现违背了某个规则就输出相应的提示信息
    有相应的配置, 可定制检查

## 3. vue组件单文件的组成
    <template>
      <div></div>
    </template>
    <script>
    export default {
      props: []/{}
        data(){},
      computed: {}
        methods: {},

      watch: {}
      filters: {}
      directives: {}
      components: {}
    }
    </script>
    <style>
    </style>

## 组件化编码的3大步
    1). 拆分组件
    2). 静态组件
    3). 动态组件
      a. 动态初始化显示
      b. 交互

## 设计data数据
    数据类型?  数组
    数据名称?  todos
    数据保存在哪个组件?   看是哪个组件还是哪些组件?
    将更新数据的方法定义在哪个组件?   数据在哪方法就定义在哪


## 事件操作
    1). 绑定事件监听
      原生/自定义: 必须执行特定的绑定事件监听的代码
      a. 事件名/类型
      b. 回调函数: 在分发事件时执行, 可以接收到传递的数据
    2). 触发/分发事件
      原生: 当用户对标签元素的界面做特定操作时, 浏览器会自动分发对应名称的事件, 
            并根据操作封装包含所有相关信息数据的对象event
      自定义的: 必须执行特定的分发事件的代码: dispatch/emit('xxx', data)
      a. 事件名/类型
      b. 数据


      全局事件总线