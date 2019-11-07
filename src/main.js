import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'lib-flexible'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false


import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

import { RadioGroup, Radio } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
import 'vant/lib/index.css';
Vue.use(RadioGroup);
Vue.use(Radio)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
