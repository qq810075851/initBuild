// 全局变量
const APP_CONFIG = {
	domain: '', // HTTP请求地址
	
	// 全局的2种跳转功能
	navigateTo(url){
		uni.navigateTo({
			url:url
		})
	},
	switchTab(url){
		uni.switchTab({
			url:url
		})
	},
	
}

if(process.env.NODE_ENV === 'development'){
	// 开发环境
	// APP_CONFIG.domain = 'http://192.168.8.171:8062'
	// APP_CONFIG.domain = 'http://192.168.8.165:8062'
	APP_CONFIG.domain = 'http://www.nwmtc.com'
}else{
	// 上线环境
	APP_CONFIG.domain = 'http://www.nwmtc.com'
}

export default APP_CONFIG