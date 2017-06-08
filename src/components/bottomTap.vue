<style>
  .bottomTap{
    width: 7.5rem;
    height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0.01rem;
    left: 0;
    z-index: 9999;
    border-top: 1px solid #f4f4f4;
  }
  .bottomTap>a>div{
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 1rem;
  }
  .bottomTap>a>.left>img{
    width: 0.4rem;
    height: 0.69rem;
  }
  .bottomTap>a>.right>img{
    width: 0.51rem;
    height: 0.77rem;
  }
</style>
<template>
  <div class="bottomTap">
    <router-link to="/">
      <div class="left fl" >
        <img v-if="tapIndexBtn" src="../assets/images/indexTapSelect.png"/>
        <img v-else src="../assets/images/indexTap.png"/>
      </div>
    </router-link>
    <router-link to="/mine">
      <div class="right fr">
        <img v-if="tapMineBtn" src="../assets/images/mineTap.png"/>
        <img v-else src="../assets/images/mineTapSelect.png"/>
      </div>
    </router-link>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: [],
    data () {
      return {
      }
    },
    computed : {
      ...mapGetters([
        'tapIndexBtn','tapMineBtn'
      ]),
    },
    methods: {
      ...mapActions([
        'bottomTapStatus',
        ]),
      onTapBottom　: function(type)
        {
            if(type == 'index' ){
              this.bottomTapStatus(true);
            }else{
              this.bottomTapStatus(false);
            }
        }
    },

  }
</script>


