function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.depIds = {};
    this.value = this.get();
}

Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            // 调用更新节点的回调函数
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function(dep) {
        // 如果关系还没有建立过
        if (!this.depIds.hasOwnProperty(dep.id)) {
            // 将watcher添加到dep中, 建立dep到watcher的关系
            dep.addSub(this);
            // 将dep添加到watcher中, 建立watcher到dep的关系
            this.depIds[dep.id] = dep;
        }
    },
    get: function() {
        Dep.target = this;
        var value = this.getVMVal();
        Dep.target = null;
        return value;
    },

    getVMVal: function() {
        var exp = this.exp.split('.');
        var val = this.vm._data;
        exp.forEach(function(k) {
            val = val[k];
        });
        return val;
    }
};