<style>
  .contentList{
    height: 2.6rem;
    width:7.5rem;
    padding: 0 0.3rem;
    background: #fff;
    margin: 0.1rem 0;
    position: relative;
  }
  .contentList>.list{
    display: inline-block;
    padding-left: 0.2rem;
    height: 100%;
    position: absolute;
  }
  .contentList>.list>li:first-child{
    font-size: 0.28rem;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
    display: block;
    color: #000;
  }
 .contentList>.list>li{
    display: inline-block;
    margin-right: 0.2rem;
    font-size: 0.24rem;
    color: #8c8c8c;
  }
  .contentList>.list>li>img{
    width: 0.3rem;
    height: 0.3rem;
    font-size: 0.24rem;
    margin-top: -0.05rem;
    color: #8c8c8c;
  }
 .contentList>img{
    height: 100%;
    width: 1.9rem;
  }
 .contentList>.state{
    width: 0.9rem;
    height: 0.6rem;
    position: absolute;
    right: 0.3rem;
    top: 0;
  }
</style>
<template>
  <div>
    <template v-for="(item,index) in projectListArrs">
      <router-link :to="{path:'/project',query: {projectId:item.projectId}}">
        <div class="contentList">
          <img  :src="item.icon"/>
          <ul class="list">
            <li> {{item.projectName}}</li>
            <li>
              <img src="../assets/images/schedule.jpg" alt=""/>
              <span>{{item.hasCollected | exceed100(item.money)}}</span>
            </li>
            <li>
              <img src="../assets/images/money.jpg" alt=""/>
              <span>{{item.hasCollected | formatMoney}}</span>
            </li>
            <li>
              <img src="../assets/images/timer.jpg" alt=""/>
              <span>{{item.stopDate | stopTime }}天</span>
            </li>
          </ul>
          <img class="state" src="../assets/images/crowdfundP.jpg" alt=""/>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
  import { commonJs } from '../assets/js/Common';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    props: ['projectListArrs'],
    data () {
      return {
        showIndex : false
      }
    },
    components: {
    },
    methods: {
      ...mapActions([

      ]),
    },
    filters: {
      //项目进度超过100%
      exceed100 : function(arrangeMoney,allMoney){
        return commonJs.exceed100(arrangeMoney,allMoney);
      },
      //格式化金额
      formatMoney : function(str){
        return commonJs.formatMoney(str);
      },
      //格式化项目时间
      stopTime : function(stopTime){
        return commonJs.stopTime(stopTime);
      },

    }
  }
</script>


