// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';
import axios from 'axios'
import store from './vuex/store'
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';
Vue.use(YDUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false
var v = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
})




