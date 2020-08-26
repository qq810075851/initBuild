import http from './http-service.js';


// 封装打卡功能的所有接口
class PunchTheClockService {
	constructor(arg) {
		
	}
	
	/** 动态详情接口(铁柱)
	 * @param {Object} data
	 */
	fetchDynamicDetailsList(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/discuss/selectynamics`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//分类下动态列表
	categorizeDynamicList(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/Ynamics/ynamicsList`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	
	//发布动态便签的查询
	publishTagQuery(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/cardlabel/selectlabelList`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//发布动态接口
	releaseDynamic(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/Ynamics/addYnamics`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//查询我所有动态的接口
	queryAllMyUpdates(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/Ynamics/selectYnamtics`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//打卡活动列表
	listClockingActivities(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/cardactivity/selectcardactivity`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//上传文件接口
	uploadFiles(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/upload/file`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//用户打卡显示列表
	myClockList(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/participateCardList/queryCardByUserId`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//打卡首页累计最多打卡展示
	UserClockedUp(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/participateCard/showParticipateCard`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//参加活动接口
	participateActivities(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/participateCard/addParticipateCard`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//参与打卡活动后核销金币
	PayGoldCoins(data) {
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/participateCard/addParticipateCard`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//查询余额
	balanceInquiry(data){
		return new Promise((resolve, reject) =>{
			http.post(`/api/user/chaYue`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//支付女王币
	payNwb(data){
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/writeOff/reduceNwb`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//点赞接口(铁柱)
	giveSomebody(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/touchPraise/saveTouchPraise`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
			});
	}
	
	//保存评价接口
	SaveEvaluation(data){
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/discuss/savediscuss`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	//获取顶层分类
	getTopClassi(data){
		return new Promise((resolve, reject) =>{
			http.post(`/unicom/homeTitle/homeTitleList`,data).then(res =>{
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		})
		.then(res => {
			return res;
		});
	}
	
	//登录接口（王雨）
	LoginInterface(data){
		return new Promise((resolve,reject) => {
			http.post(`/api/user/login`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 支付接口
	payment(data){
		return new Promise((resolve,reject) => {
			http.post(`/WxZF/unifiedOrder`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 关注
	attention(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/concerned/addconcerned`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 取消关注
	unfollow(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/concerned/updatestatus`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 查询是否绑定手机号码
	bindingPhoneNumber(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/persondalUser/getPersonalCenter`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 修改绑定手机号码
	modifyCellPhoneNumber(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/persondalUser/addPhone`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 打卡任务列表查询（凌坤 7-30）
	clockingTaskList(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/persondalUser/getClockOrder`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 挑战任务列表查询（凌坤 7-30）
	challengesList(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/persondalUser/getCustomVo`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	// 打卡推荐
	recommendClock(data){
		return new Promise((resolve,reject) => {
			http.post(`/unicom/openCard/query`,data).then(res =>{
				resolve(res);
				}).catch(err => {
					reject(err);
				});
			})
			.then(res =>{
				return res;
		});
	}
	
	//注册账号
	getUserInfo() {
		return new Promise((resolve, reject) => {
				const token = uni.getStorageSync(`${APP_CONFIG.storageKeys.token}`);
				// const userInfo = uni.getStorageSync(`${APP_CONFIG.storageKeys.userInfo}`);
				if (token) {
					// resolve(userInfo);
					this.fetchUserInfo().then(userInfo => {
						App.globalData.userInfo = userInfo;
						resolve(userInfo);
					}).catch(err => {
						reject('err: TOKEN失效！');
						uni.removeStorageSync(`${APP_CONFIG.storageKeys.token}`);
						uni.removeStorageSync(`${APP_CONFIG.storageKeys.userInfo}`);
					});
				} else {
					reject('err: 无登录用户信息！');
				}
			})
			.then(res => {
				return res;
			});
	}

	
}

	
	

const punchTheClockService = new PunchTheClockService(); //构造一个原型
export default punchTheClockService;  //向外暴露原型