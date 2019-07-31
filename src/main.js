/*
入口JS
*/
import eventBus from './event-bus'

eventBus.on('add', (data) => console.log('add', data) )
eventBus.on('add', (data) => console.log('add2', data) )
eventBus.on('delete', (data) => console.log('delete', data) )

// eventBus.off('delete')
// eventBus.off()

eventBus.dispatch('add', 'atguigu')
eventBus.dispatch('delete', 'xxxx')



