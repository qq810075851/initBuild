<template>
	<view>
		<Loading />
		<view class="margin flex">
			<view class="bg-black flex-sub margin-right radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/loading-black.gif" mode="aspectFit" class="gif-black response" style="height:240upx"></image>
			</view>
			<view class="bg-white flex-sub radius shadow-lg bg-color">
				<image src="https://image.weilanwl.com/gif/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>弹框加载
				</view>
				<!-- <view class="action">
					<button class="cu-btn bg-green shadow" @tap="LoadModal">
						点我
					</button>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userData:null //用户信息
		};
	},
	onLoad(options) {
		this.userData = JSON.parse(options.problem)
		console.log(this.userData)
		this.$store.commit('getUserData',this.userData)
		console.log('我的信息',this.$store.state.userData)
		const data = {
			id:1, //分类ID
			pageNo:'', //第几页(默认第一页不用传)
			pageSize:'' //每页显示条数(默认是10条)
			}
		this.punchTheClockService.getTopClassi(data).then(res =>{
			console.log(res)
		})
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
