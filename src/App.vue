<style>
  #app {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    width: 7.5rem;
    font-size: 0.2rem;
    font-family: '黑体';
    background: #f4f4f4;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
  img{
    display: inline-block !important;
    vertical-align: middle;/*  去掉图片低测默认的3像素空白缝隙*/
  }
</style>

<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>

</script>

