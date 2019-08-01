/* 
全局事件总线对象模块
*/
const eventBus = {}

// 缓存监听回调函数: {eventName1: [listener1, listener2], eventName2: [listner3]}
let listnersContainer = {}

/* 
绑定自定义事件监听的方法: on(eventName, listener)
*/
eventBus.on = function (eventName, listener) {
  // 取出对应的listeners
  let listeners = listnersContainer[eventName]
  // 如果还没存在, 创建一个空数组并保存
  if (!listeners) {
    listnersContainer[eventName]  = listeners = []
  }
  // 将新的listener保存到对应的listeners
  listeners.push(listener)
}

/* 
分发自定义事件的方法: emit(eventName, data)
*/
eventBus.emit = function (eventName, data) {
  // 得到对应的listeners
  const listeners = listnersContainer[eventName]
  // 如果有监听回调, 调用所有Listener
  if (listeners && listeners.length) {
    listeners.forEach(listener => {
      listener(data)
    })
  }
}

/* 
解绑事件监听的方法: off(eventName)
*/
eventBus.off = function (eventName) {
  // 解绑所有监听
  if (eventName===undefined || eventName===null) {
    listnersContainer = {}
  } else { // 解绑对应的监听
    listnersContainer[eventName] = []
    // delete listnersContainer[eventName]
  }
}


export default eventBus

eventBus.on('add', (data) => {
  console.log('add', data)
})
eventBus.on('add', (data) => {
  console.log('add2', data)
})
eventBus.on('delete', (data) => {
  console.log('delete', data)
})

// eventBus.off('add')
// eventBus.off()

eventBus.emit('add', 'atguigu')
eventBus.emit('delete', 'xxxx')