## 自定义全局事件总线
## 1. 相关API
    1). eventBus: 包含所有功能的全局事件总线对象
    2). eventBus.on(eventName, listener): 绑定事件监听
    3). eventBus.emit(eventName, data): 分发事件
    4). eventBus.off(eventName): 解绑事件监听

## 2. 自定义
    1). 整体结构
    2). 实现绑定事件监听
	3). 实现分发事件
	4). 实现解绑事件监听

# 自定义消息机制
## 1. 相关API
    1). PubSub: 包含所有功能的订阅/发布消息的管理者
    1). PubSub.subscribe(msg, subscriber): 订阅消息: 指定消息名和订阅者回调函数
    2). PubSub.publish(msg, data): 异步发布消息: 指定消息名和数据
    3). PubSub.publishSync(msg, data): 同步发布消息: 指定消息名和数据
    4). PubSub.unsubscribe(flag): 取消订阅: 根据标识取消某个或某些消息的订阅
## 2. 自定义
    1). 整体结构
    2). 实现订阅消息
	3). 实现同步/异步发布消息
    4). 实现取消订阅