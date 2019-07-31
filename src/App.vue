<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 路由链接 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>


      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 标识在此显示当前路由组件界面 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Toast
  } from 'mint-ui';

  export default {
    methods: {
      hint() {
        Toast('提示信息');
      }
    }
  }

</script>

<style scoped>
</style>
