/**
 * Created by Administrator on 2017/4/25.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    index
  },
});
