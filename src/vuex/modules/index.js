/**
 * Created by Administrator on 2017/4/26.
 */
import { bottomTapStatus } from './mutation-types.js'
import * as types from './mutation-types.js'

const state = {
  tapIndexBtn : true,
  tapMineBtn : true,
  bannerImgArr : [
    'http://static.ydcss.com/uploads/ydui/1.jpg',
    'http://static.ydcss.com/uploads/ydui/2.jpg',
    'http://static.ydcss.com/uploads/ydui/3.jpg'],
};

const getters = {
  indexBannerImgArr : state => state.bannerImgArr,
  tapIndexBtn : state => state.tapIndexBtn,
  tapMineBtn : state => state.tapMineBtn,
  projectBannerImgArr : state => state.bannerImgArr.slice(0,2),
};

const mutations = {
  //初始化 state
  [bottomTapStatus](state,argument){
      state.tapIndexBtn = argument.bool;
      state.tapMineBtn = argument.bool;
      if( state.tapIndexBtn == 'none'){
        state.tapIndexBtn = false;
      }
  },
};
const actions = {
  bottomTapStatus ({commit,state},status){
    commit(types.bottomTapStatus,{ bool:status});
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
