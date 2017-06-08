<style>
  .mine>header{
    position: relative;
    background: #fff;
    height: 5.65rem;
    margin-bottom: 0.1rem;
  }
  .mine>header>img:first-child{
    width: 100%;
  }
  .mine>header>img:last-of-type{
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: 0.05rem solid #FFFFFF;
    position: absolute;
    top: 2.6rem;
    left: 2.7rem;
  }
  .mine>header>p{
    width: 100%;
    text-align: center;
  }
  .mine>header>p:first-of-type{
    margin-top: 1.1rem;
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }
  .mine>header>p:last-of-type{
    color: #8c8c8c;
  }
  .mine>.tap{
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
  }
  .mine>.tap>img:first-of-type{
    width: 0.35rem;
    height: 0.35rem;
  }
  .mine>.tap>img:last-of-type{
    width: 0.24rem;
    height: 0.33rem;
    margin-top: 0.35rem;
    float: right;
  }
</style>
<template>
  <div class="mine">
    <header>
      <img src="../assets/images/header-bg.jpg" alt=""/>
      <img src="../assets/images/man_03.jpg" alt=""/>
      <p></p>
      <p>的音乐众筹</p>
    </header>
    <div class="tap" @click="skipInvestment()">
      <img src="../assets/images/invest.jpg" alt=""/>
      <span>投资项目</span>
      <img src="../assets/images/advance.jpg" alt=""/>
    </div>
    <div class="tap" @click="skipPresentProject()">
      <img src="../assets/images/manufacture.jpg" alt=""/>
      <span>音乐人项目</span>
      <img src="../assets/images/advance.jpg" alt=""/>
    </div>
    <div class="tap">
      <img src="../assets/images/consult.jpg" alt=""/>
      <span>客服咨询：添加微信客服号 xingmoquanvip</span>
      <img class="hide" src="../assets/images/advance.jpg" alt=""/>
    </div>
    <bottomTap></bottomTap>
  </div>
</template>

<script>
  import bottomTap from '../components/bottomTap'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {
      bottomTap,
    },
    computed : {

    },
    methods: {
      ...mapActions([
        'bottomTapStatus'
      ]),
    },
    //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在。
    created:function(){
      this.bottomTapStatus(false);
    },
    //在开始销毁实例时调用。此时实例仍然有功能。
    beforeDestroy:function(){

    },
    //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed 钩子在过渡完成之后调用。
    destroyed:function(){

    }
  }
</script>


