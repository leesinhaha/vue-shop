import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入mintui样式
import "mint-ui/lib/style.css";

// 按需引入mintui组件
import { Header, Button } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
