<style rel="stylesheet/scss" lang="scss">
   $color : #fff;
  .banner{
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    background: $color;
    span:first-child{
      font-size: 0.3rem;
      font-weight: 900;
      margin-right: 0.1rem;
    }
  }

  .banner>span:last-child{
    font-size: 0.22rem;
    color: #8c8c8c;
  }
 .answer {
    border-top: 1px solid #f4f4f4;
    padding: 0.2rem 0.3rem;
    background: #fff;
  }
  .answer>p{
    line-height: 0.35rem;
    font-size: 0.24rem;
    background: #fff;
  }
  .answer>img{
    display: block !important;
    margin: 0.25rem auto 0;
    width: 2.67rem;
    height: 2.52rem;
  }
</style>
<template>
    <div>
      <slider :imgArr="indexBannerImgArr"></slider>
      <template>
        <div class="banner">
          <span>项目列表</span ><span>(2)</span>
        </div>
        <projectList :projectListArrs = "projectListArrs"></projectList>
      </template>
      <template >
        <div class="answer">
          <div class="banner">
            <span>项目咨询</span><span class="hide">(2)</span>
          </div>
          <p>注意！请您务必长按扫描二维码，并添加客服微信，客服人员才能联系您以便提供投资人配套服务。</p>
          <img src="../assets/images/code.jpg" />
        </div>
        <img src="../assets/images/introduction.jpg" style="width:7.5rem;margin-top:0.1rem;"/>
      </template>
      <bottomTap></bottomTap>
    </div>
</template>
<script>
  import slider from '../components/slider'
  import projectList from '../components/projectList'
  import bottomTap from '../components/bottomTap'
  import myslot from '../components/slot.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['imgArr'],
    data () {
      return {
        projectList : [],
        childWords : '',
      }
    },
    components: {
      slider,
      projectList,
      bottomTap,
      myslot,
    },
    computed : {
      ...mapGetters([
        'indexBannerImgArr',
     ]),
      projectListArrs : function () {
          return this.projectList
      }
    },
    methods: {
      ...mapActions([
        'bottomTapStatus'
      ]),
      getprojectList : function () {
          var data ={"result":[{"hasCollected":0,"icon":"http://7xkfbr.com1.z0.glb.clouddn.com/170220/15/3259/170220_153259_b8Mdfn0T.jpg","money":2333,"projectId":22,"projectName":"电影XX","stopDate":1491291180000,"stuats":"F"},{"hasCollected":166002,"icon":"http://7xkfbr.com1.z0.glb.clouddn.com/170216/18/2736/170216_182736_wfx3Plo3.jpg","money":300000,"projectId":21,"projectName":"电影《他的名字》影视众筹","stopDate":1487663820000,"stuats":"F"}],"retcode":0,"retmsg":"成功"}
          this.projectList = data.result
//        var json =  {
//          page : 1,
//          pageSize : 20,
//          type : 'music'
//        }
//        console.log("created..");
//        json = JSON.stringify(json)
//        var that = this;
//        this.$http.post('/zc2/project/list', json,)
//          .then(function (response) {
//            that.projectList = response.data.result;
//          })
//          .catch(function (error) {
//            console.log(error);
//          });
      }
    },
    //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在。
    created:function(){
//      console.log('created.....')
    },
    mounted : function () {
      this.getprojectList();
      this.bottomTapStatus(true);
//      console.log('mounted.....')
    },
    //在开始销毁实例时调用。此时实例仍然有功能。
    beforeDestroy:function(){

    },
    //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed 钩子在过渡完成之后调用。
    destroyed:function(){

    }
  }
</script>


