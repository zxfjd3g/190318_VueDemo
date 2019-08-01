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

## 4. 组件化编码的3大步
    1). 拆分组件
    2). 静态组件
    3). 动态组件
      a. 动态初始化显示
      b. 交互

## 5. 设计data数据
    数据类型?  数组
    数据名称?  todos
    数据保存在哪个组件?   看是哪个组件还是哪些组件?
    将更新数据的方法定义在哪个组件?   数据在哪方法就定义在哪

## 6. 组件间通信
    0). 组件通信的5种方式
        props
        vue的自定义事件
        全局事件总线
        slot
        vuex(后面单独讲)
    1). props:
        父子组件间相互通信的基本方式
        属性值的2大类型:
            一般/非函数: 父组件-->子组件
            函数: 子组件-->父组件
        问题:
            隔层组件间传递: 必须逐层传递(麻烦)
            兄弟组件间: 必须借助父组件(麻烦)
    2). vue自定义事件
        给子组件标签绑定事件监听
        子组件向父组件的通信方式
        功能类似于function props
        不适合隔层组件和兄弟组件间的通信
    3). 全局事件总线
        利用vm对象的$on()/$emit()/$off()
        利用组件对象的原型对象是vm对象
        创建vm对象作为全局事件总线对象保存到Vue的原型对象上, 所有的组件对象都可以直接可见:
            Vue.prototype.$bus = new Vue()
            任意组件A可以通过this.$bus.$on()绑定监听接收数据
            任意组件B可以通过this.$bus.$emit()分发事件, 传递数据
    4). slot
        父组件向子组件通信
        通信是带数据的标签
        注意: 标签是在父组件中解析
    5). vuex
        多组件共享状态(数据的管理)
        组件间的关系也没有限制
        功能比事件总线强大, 更适用于vue项目
    6). 事件处理机制理解
        绑定事件监听
            原生/自定义: 必须执行特定的绑定事件监听的代码
            a. 事件名/类型
            b. 回调函数: 在分发事件时执行, 可以接收到传递的数据
        触发/分发事件
            原生: 当用户对标签元素的界面做特定操作时, 浏览器会自动分发对应名称的事件, 
                并根据操作封装包含所有相关信息数据的对象event
            自定义的: 必须执行特定的分发事件的代码: dispatch/emit('xxx', data)
            a. 事件名/类型
            b. 数据
## 7. ajax
    相关库:
        vue-resource: vue插件, 多用于vue1.x
        axios: 第三方库, 多用于vue2.x
    发请求的时机:
        mounted(): 打开界面后自动显示
        事件回调函数: 用户做特定操作后

## 8. vue UI组件库
    常用的UI组件库
        PC: Element / iview /
        Mobile: mint-ui / cube-ui
    mint-ui的使用
        根据官方文档使用
        按需打包

## 9. vue-router
    vue用来实现SPA的插件
    使用vue-router
        1. 创建路由器: router/index.js
          new VueRouter({
            mode: 'hash/history'
            routes: [
              { // 一般路由
                path: '/about',
                component: About
              },
              { // 自动跳转路由
                path: '/',
                redirect: '/about'
              }
            ]
          })
        2. 注册路由器: main.js
           import router from './router'
           	new Vue({
           		router
           	})
        3. 使用路由组件标签:
           	<router-link to="/xxx">Go to XXX</router-link>
           	<router-view></router-view>
        4. 2个对象
            $router: 代表路由器对象, 包含一些实现路由跳转/导航的方法: push()/replace()/back()
            $route: 代表当前路由对象, 包含一些路由相关的属性: path/params/query/meta
    编写路由的3步
        1. 定义路由组件
        2. 映射路由
        3. 编写路由2个标签
    嵌套路由
        children: [
            {
              path: '/home/news/:xxx/:yyy',
              component: news
            },
            {
              path: 'message',
              component: message
            }
        ]
    向路由组件传递数据
        params/query: <router-link to="/home/news/abc/123?zzz=1234">
        将请求参数映射成props: props: route => ({id: route.params.id})
        变相props: <router-view msg='abc'>
    缓存路由组件
        路由组件对象默认的生命周期: 被切换时就会死亡, 切换回来时重新创建
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    路由的编程式导航
        this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
        this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
        this.$router.back(): 请求(返回)上一个记录路由

## 10. 自定义全局事件总线: mini-event-bus
	1). eventBus: 事件总线是一个对象, 是组件间进行通信的共用桥梁, 它包含了用于通信的方法
	2). eventBus的方法
		on(eventName, listener): 绑定事件监听---保存监听回调
		emit(eventName, data): 分发事件---触发所有对应的监听回调调用, 并传入data
		off(eventName): 解绑事件监听---移除对应的所有监听回调
	3). 内部存储listener的容器数据结构:
		{
			eventName1: [listener1, listener2],
			eventName2: [listener3]
		}
