<style>

</style>
<template>
  <div>
    <slider :imgArr="projectBannerImgArr" ></slider>
    <infinitescroll></infinitescroll>
    <bottomTap></bottomTap>
  </div>
</template>

<script>
  import slider from '../components/slider';
  import projectList from '../components/projectList';
  import infinitescroll from '../components/infinitescroll';
  import bottomTap from '../components/bottomTap';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: ['imgArr'],
    data () {
      return {
        bannerImgArr : [
          'http://static.ydcss.com/uploads/ydui/1.jpg',
          'http://static.ydcss.com/uploads/ydui/2.jpg',
          'http://static.ydcss.com/uploads/ydui/3.jpg'],
        projectList : [],
      }
    },
    components: {
      slider,
      projectList,
      infinitescroll,
      bottomTap
    },
    computed : {
      ...mapGetters({
        projectBannerImgArr : 'projectBannerImgArr'
      }),
      projectListArrs : function () {
        return this.projectList
      }
    },
    methods: {
      ...mapActions([
        'bottomTapStatus'
      ]),
    },
    created: function () {
      //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
      //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。]
      this.bottomTapStatus('none')
//      console.log(this.$route.query.projectId)
    },
    beforeDestroy: function () {  //触发方式,在console里面打myVue.$destroy();
      //在开始销毁实例时调用。此时实例仍然有功能。
    },
    destroyed: function () {   //触发方式,在console里面打myVue.$destroy();其中myVue.$destroy(true)是删除DOM节点,会触发detached函数,但是实例仍然存在
      //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
    }
  }
</script>


