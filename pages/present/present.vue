<template>
	<!-- 大背景 -->
	<view class="all">
		<Loading />
		<!-- 红包背景 -->
		<view class="all-img">
			<!-- 头部导航栏 -->
			<view class="cu-bar justify-between padding-lr flex  text-white" style="border-bottom: 1px solid rgba(255,255,255,0.2); border-color: white;">
				<text class="cuIcon-back"></text>
				<view class="text-bold">好礼免费送</view>
				<view class=""></view>
				<image src="../../static/image/info.png" mode="widthFix" style="width: 150rpx;position: absolute;right: 0;top: 23rpx;"></image>
			</view>
			<!-- 好礼背景 -->
			<view class="presents">
				<image src="../../static/image/img6.png" mode="widthFix"></image>
				<view style="">砍价记录</view>
			</view>

			<!-- 内容区 -->
			<view class="neirong">
				<view class="nr-all">
					<view class="nr-top">
						<view class="xy"></view>
						<view class="zy"></view>
						<view class="dy"></view>
						<text>正在兑换</text>
						<view class="dy"></view>
						<view class="zy"></view>
						<view class="xy"></view>
					</view>
				</view>
				
				<view class="nr-center">
					<view class="nr-one">
						<view class="left">
							<image src="../../static/image/img4.jpg" ></image>						</view>
						<view class="right">
							<view class="top">
								已砍<text class="">236.55</text>元,还剩<text>5.45</text>元
							</view>
							<view class="cu-progress round  margin-lr" style="height: 10px;margin-top: 5px;width: 80%;">
								<view class="tent" :style="[{ width:loading?'81.8%':''}]">61.8%</view>
							</view>
							<view class="times" style="margin-top: 5px;">
								<view class="trs">23</view>:
								<view class="trs">23</view>:
								<view class="trs margin-right">23</view> 
								<view class="">
									后结束
								</view>
							</view>
							<view class="btn">
								继续砍价
							</view>
						</view>
					</view>
					<view class="hr" style="background-color: #efefef;width: 100%;height: 1px;"></view>
					<view class="nr-one">
						<view class="left">
							<image src="../../static/image/img4.jpg" ></image>						</view>
						<view class="right">
							<view class="top">
								已砍<text class="">236.55</text>元,还剩<text>5.45</text>元
							</view>
							<view class="cu-progress round  margin-lr" style="height: 10px;margin-top: 5px;width: 80%;">
								<view class="tent" :style="[{ width:loading?'81.8%':''}]">61.8%</view>
							</view>
							<view class="times" style="margin-top: 5px;">
								<view class="trs">23</view>:
								<view class="trs">23</view>:
								<view class="trs margin-right">23</view> 
								<view class="">
									后结束
								</view>
							</view>
							<view class="btn">
								继续砍价
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
		};
	},
	onLoad: function() {
		let that = this;
		setTimeout(function() {
			that.loading = true
		}, 500)
	}
};
</script>

<style lang="less" scoped>
// 内容区
.neirong {
	width: 100%;
	padding: 0 5%;
	overflow: hidden;
	.nr-top-b {
		position: absolute;
		width: 100%;
		top: 32rpx;
		height: 30rpx;
	}
	.nr-top {
		position: absolute;
		top: -20rpx;
		padding: 0 150rpx;
		width: 100%;
		height: 60rpx;
		background-color: #ffde40;
		border-radius: 20rpx;
		box-shadow: 0 1px 2px #333333;
		align-items: center;
		display: flex;
		justify-content: space-around;
		color: #f16512;
		.dy,
		.zy,
		.xy {
			background-color: white;
			border-radius: 50%;
		}
		.dy {
			width: 25rpx;
			height: 25rpx;
		}
		.zy {
			width: 20rpx;
			height: 20rpx;
		}
		.xy {
			width: 10rpx;
			height: 10rpx;
		}
	}

	.nr-all {
		width: 100%;
		height: 45rpx;
		background-color: white;
		position: relative;
		margin-top: 30rpx;
	}
	
	.nr-center{
		width: 100%;
		height: 500rpx;
		border-radius: 0 0  3% 3%;
		background-color: white;
		padding: 0 5% 5% 5%;
		.nr-one{
			background-color: white;
			width: 100%;
			height: 250rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left,.right{
				display: flex;
				justify-content: center;
				width: 100%;
			}
			.right{
				justify-content: center;
				flex-direction:column;
				padding-right: 10rpx;
				.top text{
					color: #f16512;
					font-size: 12px;
				}
				.tent{
					background-color: #f16512;
				}
				
				.times{
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: bold;
					.trs{
						background-color: #f16512;
						color:white;
						padding: 2px;
						border-radius: 10rpx;
						font-weight: 100 !important;
					}
				}
				
				.btn{
				   width:150rpx;
				   margin: 5px auto 0 auto;
				   text-align: center;
				   border-radius: 20rpx;
				   box-shadow: 0 1px 3px #999999;
				   background-color: #f16512;
				   color:white;
				   height: 20px;
				}
				
			}
			.left{
			}
			.left image{
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}
			.right image{
				width: 45%;
				border-radius: 50%;
			}
		}
	}
}

// 背景
.all {
	background-color: #f16512;
	height: 100vh;
	width: 100%;

	.all-img {
		background-image: url(../../static/image/bk2.png);
		height: 100vh;
		background-size: contain;
		background-position-y: 100rpx;
	}
}

//好礼背景
.presents {
	width: 100%;
	height: 400rpx;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	image {
		width: 35%;
		margin: 0 auto;
		display: block;
	}

	view {
		position: absolute;
		bottom: 20rpx;
		right: 35rpx;
		color: white;
		font-weight: bold;
	}
}
</style>
