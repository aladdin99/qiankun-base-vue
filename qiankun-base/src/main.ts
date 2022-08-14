import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { registerMicroApps, start } from 'qiankun';
import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {
  msg: "form parent!"
}

// 初始化 通讯信息 state
const actions: MicroAppStateActions = initGlobalState(state);

// 监听全局状态
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
// 设置全局属性
actions.setGlobalState(state);
// 移除当前应用的状态监听
actions.offGlobalStateChange();

// 注册子应用
registerMicroApps([
  {
    name: 'micro-app1',
    entry: '//localhost:3011',
    container: '#micro-app1',
    activeRule: '/micro-app1',
  },
  {
    name: 'micro-app2',
    entry: '//localhost:3012',
    container: '#micro-app2',
    activeRule: '/micro-app2',
  },
]);
start();

const instance = createApp(App);
instance.use(VueAxios, axios)
instance.mount('#app');
