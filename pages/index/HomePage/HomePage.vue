<template>
	<scroll-view>
		<view>
			<view class="title-box">
				<span>未读消息</span>
			</view>
			<NotificationSwiper></NotificationSwiper>
		</view>
		<view>
			<view class="title-box">
				<span>浏览历史</span>
			</view>
			<NotificationSwiper></NotificationSwiper>
		</view>
		<view>
			<view class="title-box">
				<span>广场</span>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import NotificationSwiper from "../../../components/NotificationSwiper.vue"
	export default {
		components: {
			// 消息栏
			NotificationSwiper
		},
		data() {
			return {

			}
		},

		methods: {

		}
	}
</script>

<style>
	.title-box {
		padding-left: 15px;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		flex-direction: row;
		-webkit-box-align: center;
		align-items: center;
		height: 40px;
		background-color: #f8f8f8;
		font-weight: normal;
		color: #333;
		margin-top: 20rpx;
		font-size: 20px;
	}
</style>
