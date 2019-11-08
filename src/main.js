import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'lib-flexible'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.config.productionTip = false


import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

import { RadioGroup, Radio } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);

Vue.use(RadioGroup);
Vue.use(Radio)
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
