<template>
	<view>
		<Loading />
		<view class="cu-bar bg-white text-black" style="margin-left: 5upx;">
			<view class="action"><text class="cuIcon-back text-black"></text></view>
			<view class="content text-bold">详情</view>
		</view>
		<swiper class="screen-swiper">
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
			</swiper-item>
		</swiper>
		<view class="cu-bar bg-white solid-bottom" style="margin-left: 5upx;">
			<view></view>
			<view class="content text-black">确认收货地址</view>
			<view class="action "><text class="text-bold text-black cuIcon-close"></text></view>
		</view>

		<view class="bg-white" style="width:100%;padding-top: 5%;padding-bottom: 5%;padding-left: 3%;padding-right: 3%;">
			<view class="flex align-center   justify-between">
				<view class="margin-xs radius"><image style="width: 80rpx;" class="" src="../../static/image/addr.png" mode="widthFix"></image></view>
				<view class=" flex-direction align-center  ">
					<view class="justify-between flex radius align-center">
						<text class="text-bold margin-xs radius">溜溜球</text>
						<text class=" margin-lr radius">213124125412</text>
					</view>
					<view class=" margin-xs radius">二奥尔格额嘎尔哥奥尔2格奥尔格阿哥2饿啊奥尔格奥尔格噶尔</view>
				</view>
				<view class=" margin-xs radius"><image style="width: 50rpx;" class="" src="../../static/image/check.png" mode="widthFix"></image></view>
			</view>
		</view>
		
		<view class="padding-sm bg-white solid-top justify-between flex" style="margin-left: 5upx;height: 460rpx;">
			<view class="text-black text-bold">
				更换收货地址
			</view>
			<view class="action " >
				<text class="text-bold text-black cuIcon-close"></text>
			</view>
		</view>
		<button type="primary" style="margin: 3% auto;width: 30%;border-radius: 50upx;font-size: 14px;" class="radius text-bold">立即领取</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			]
		};
	}
};
</script>

<style lang="less" scoped></style>
