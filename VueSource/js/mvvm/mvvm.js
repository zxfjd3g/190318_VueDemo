/* 
相当于Vue的构造函数
*/
function MVVM(options) {
    // 保存配置对象到vm上
    this.$options = options;
    // 保存data对象保存到vm和data变量上
    var data = this._data = this.$options.data;
    // 保存vm到me变量
    var me = this;

    // 遍历data每个属性, 并对属性实现数据代理
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    // 对data中所有属性进行监听/劫持
    observe(data, this);

    // 创建一个编译对象(内部在编译模板)
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    /* 
    对指定属性名的属性实现数据代理
    */
    _proxy: function(key) {
        // 保存vm
        var me = this;
        // 给vm添加指定属性名(data中的)的属性, 使用属性描述符
        Object.defineProperty(me, key, {
            configurable: false, // 不可重新定义修改
            enumerable: true, // 可以枚举
            /* 
            当通过vm.xxx读取属性值是自动调用
            */
            get: function proxyGetter() {
                // 返回data对象中对应属性名的属性值
                return me._data[key];
            },
            /* 
            当通过vm.xxx = value修改属性值时自动调用
            */
            set: function proxySetter(newVal) {
                // 将最新的值保存到data对应的属性上
                me._data[key] = newVal;
            }
        });
    }
};