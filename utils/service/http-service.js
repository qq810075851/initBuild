import APP_CONFIG from '../../app-config.js';
import $loading from '@/components/loading/loading'
import main from '@/main.js'
import Vue from 'vue'
const that = this;
console.log(Vue.prototype)
// console.log(Vue.this)

class HttpService {
	
	constructor(arg) {

	}
	/**请求封装
	 * @param {Object} method
	 * @param {Object} url
	 * @param {Object} data
	 */
	request(method, url, data) {
		let $$header = Object.assign({}, this.setHeaders());
		const token = ``;
		if (token && data && url !== `/nwm/sys/index/get_openid` && url !== `/nwm/sys/index/wx_decode` && url !== `/nwm/sys/index/wx_login2`) {
			data.token =  token;
		}
		let blank = false;
		if (!blank && !data.isHideLoading) {
			uni.showLoading({
				title: '加载中···',
				mask: false,
			});
			that.$loading()
			
		}
		return new Promise((resolve, reject) => {
				uni.request({
					url: `${APP_CONFIG.domain}${url}`,
					method: method,
					data: data || {},
					header: $$header,
					dataType: 'json',
					responseType: 'text',
					success: res => {
						if (!blank) uni.hideLoading();
						resolve(res);
					},
					fail: (err) => {
						if (!blank) uni.hideLoading();
						reject(err);
					},
					complete: () => {}
				});
			})
			.then(res => {
				// console.error(res);
				if (res.statusCode === 200) {
					const result = res.data;
					if (result.ID === '-1' && result.msg === '登录超时，请重新登录.') {
						this.showToast(result.msg);
						uni.removeStorageSync(APP_CONFIG.tokenKey);
						uni.removeStorageSync(APP_CONFIG.userInfo);
						throw new Error(result);
					} else if (result.ID === '-1') {
						this.showToast(result.msg);
						throw new Error(result);
					}
					return result;
				} else if (res.data.ID === '-1') {
					this.showToast(res.data.msg);
					return res;
					// uni.reLaunch({
					// 	url: '/pages/login/login'
					// });
				} else {
					throw new Error(`后端接口请求发生异常,请联系服务端处理,请求地址为:${APP_CONFIG.domain}${url}`);
				}
				//  else if (res.data.code !== 200) {
				// 	this.showToast(res.data.msg);
				// 	return res.data;
				// }
				// if (result.code === 200) {
				// 	return result;
				// } else {
				// 	throw new Error(result);
				// }
			});
	}
	/**
	 * 设置请求的 header , header 中不能设置 Referer
	 */
	setHeaders() {
		return {
			'content-type': 'application/json', // 默认值
			// 'Authorization': `${uni.getStorageSync(APP_CONFIG.tokenKey)}`
		}
	}

	get(url, params = {}) {
		Object.keys(params).forEach((key, index) => {
			url += index === 0 ? '?' : '&';
			url += `${key}=${encodeURIComponent(params[key])}`;
		});
		return this.request(`GET`, url, '');
	}

	post(url, data) {
		return this.request(`POST`, url, data);
	}

	put(url, data) {
		return this.request(`PUT`, url, data);
	}

	delete(url, data) {
		return this.request(`DELETE`, url, data);
	}
	
	uploadFile(filePath) {
		let blank = false;
		if (!blank) {
			uni.showLoading({
				title: '加载中···',
				mask: false,
			});
			// this.$loading()
		}

		return new Promise((resolve, reject) => {
				uni.uploadFile({
					url: `${APP_CONFIG.domain}/nwm/index/index/upload`,
					method: 'POST',
					header: {
						"Content-Type": "multipart/form-data"
					},
					name: 'formFile',
					filePath: filePath,
					formData: {
						// token: `${uni.getStorageSync(APP_CONFIG.tokenKey)}`
					},
					success: res => {
						if (!blank) uni.hideLoading();
						resolve(res);
					},
					fail: (err) => {
						if (!blank) uni.hideLoading();
						reject(err);
					},
					complete: () => {}
				});
			})
			.then(res => {
				if (typeof res.data === "string") {
					// res.data = JSON.parse(res.data);
					if (res.data[0] !== '{' && res.data[res.data.length - 1] === '}') {
						console.log('1');
						res.data = res.data.substr(1);
						res.data = JSON.parse(res.data);
					} else {
						console.log('2');
						res.data = JSON.parse(res.data);
					}
					console.log('resData', res.data);
				}
				if (res.statusCode === 200 && res.data.ID === '1') {
					const result = res.data;
					return result;
				} else {
					throw new Error(`后端接口请求发生异常,请联系服务端处理,请求地址为:${APP_CONFIG.domain}/api/File/UploadFile`);
				}
			});
	}

	/** 消息弹出框-为提示错误信息用
	 * @param {Object} errorInfo
	 */
	showToast(errorInfo) {
		uni.showToast({
			title: errorInfo,
			icon: 'none',
			duration: 2000,
			success() {
				errorInfo = null;
			}
		});
	}


}
const httpService = new HttpService();
export default httpService;
