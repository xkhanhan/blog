import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import axois from 'axios';
import VueAxois from 'vue-axios';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import moment from 'moment';
import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
Vue.prototype.$moment = moment;

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueAxois,axois)
Vue.use(mavonEditor)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
