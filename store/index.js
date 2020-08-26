import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		userData:{user:{id:47}}, //用户的全部信息，字段user和token
		courseId:1,// 课程ID
		courseInformation:null, // 课程信息
		loadModal: false, //控制load显示
	},
	mutations:{
		// 得到存放用户的信息
		getUserData(state, userData){
			state.userData = userData
		},
		// 得到课程的ID
		getCourseIdX(state, courseId){
			state.courseId = courseId
		},
		//tf作为主动控制的参数
		switch_loading(state,tf){
			if(tf){
				state.loadModal = tf;
			}else{
				state.loadModal = !state.loadModal
			}
		}
		
	},
	
	actions: {

	}
})

export default store;