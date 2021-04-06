import Vue from 'vue';
import { Button } from 'ant-design-vue';
import App from './App.vue';
import router from '../router';
import store from '../store';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event('custom-render-trigger'));
  }
}).$mount('#app');
