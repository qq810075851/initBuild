"use strict";
import Vue from 'vue'
import App from '@/App'
import Vuex from 'vuex'
import store from '@/store'

import cuCustom from '@/colorui/components/cu-custom.vue'  // 导入color UI库
import Loading from '@/components/loading/loading.vue' // 导入loading组件
import Vconsole from 'vconsole';  // 导入手机端调试工具
import APP_CONFIG from '@/app-config.js'  // 导入全局的配置
import HttpService from '@/utils/service/http-service.js';  //请求方式的文件
import PunchTheClockService from '@/utils/service/punch-the-clock-service.js'; //打卡功能的所有请求


Vue.config.productionTip = false


App.mpType = 'app'
import tui from './common/httpRequest'
Vue.prototype.tui = tui

//全局组件注册
Vue.component('cu-custom',cuCustom)
Vue.component('Loading',Loading)
new Vconsole();




//是否显示加载中 的方法 调用store中的mutations方法
function loadingFunc(tf){
    if(tf){
        store.commit("switch_loading",tf)
    }else{
        store.commit("switch_loading")
    }
}

Vue.prototype.$store = store;
// 封装http服务
Vue.prototype.http = HttpService;

// 封装的接口
Vue.prototype.punchTheClockService = PunchTheClockService;
const app = new Vue({
	store,
    ...App
})
//挂在到原型链上 方便在每个页面中  使用 this.$loading()  去显示加载中
Vue.prototype.$loading = loadingFunc;
app.$mount()

