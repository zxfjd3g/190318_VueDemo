/* 
事件总线模块
*/
const eventBus = {}

// 用来缓存所有监听器的对象容器
let listenersContainer = {}

/* 
绑定事件监听
*/
eventBus.on = function (eventName, listener) {
  let listeners = listenersContainer[eventName]
  if (!listeners) {
    listenersContainer[eventName] = listeners = []
  }
  listeners.push(listener)
}

/* 
分发事件
*/
eventBus.dispatch = function (eventName, data) {
  const listeners = listenersContainer[eventName]
  if (listeners && listeners.length>0) {
    listeners.forEach(listener => {
      listener(data)
    })
  }
}

/* 
解绑事件监听
*/
eventBus.off = function (eventName) {
  if (eventName===undefined || eventName===null) {
    listenersContainer = {}
  } else {
    delete listenersContainer[eventName]
  }
}

export default eventBus