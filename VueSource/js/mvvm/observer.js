function Observer(data) {
    // 保存data
    this.data = data;
    // 启动劫持监视
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        var me = this;
        // 遍历data中最外层中的属性
        Object.keys(data).forEach(function(key) {
            // 给data定义响应式属性(对属性实现监视/劫持)
            me.defineReactive(data, key, data[key]);
        });
    },

    defineReactive: function(data, key, val) {
        // 为当前属性创建一个对应的dep(订阅器)
        var dep = new Dep();
        // 通过递归调用实现对所有层次属性的监视
        var childObj = observe(val);

        // 重新定义data中的属性
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            // 返回属性值
            get: function() {
                // 建立dep与watcher的关系
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通过dep订阅器来通知所有相关的watcher订阅者
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    // 创建一个观察者对象
    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        // 遍历每个订阅者(watcher)
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;