<template>
	<view>
		<view class="cu-load load-modal" v-if="$store.state.loadModal">
			<image src="/static/logo.png"  mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	onLoad() {
	},
	methods: {
		LoadModal(e) {
			this.$store.state.loadModal = true;
			setTimeout(() => {
				this.$store.state.loadModal = false;
			}, 2000)
		},
	}
};
</script>

<style>
</style>
