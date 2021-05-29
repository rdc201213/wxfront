<template>
	<view>
		<view class="uni-flex uni-row" style="align-items: center;">
			<!-- <view class="text" style="width: 200rpx;">&lt;返回</view> -->
			<view class="text" style="-webkit-flex: 1;flex: 1;text-align: center;font-weight: bold;font-size: 35rpx;">游泳{{current_class_type}}班({{current_class_time}})</view>
			<!-- <view class="text" style="width: 200rpx;"></view> -->
		</view>
		<view>
			<uni-card title="公告" v-bind:extra="time_span" isShadow @click=""><text class="content-box-text">{{annoucement}}</text></uni-card>
		</view>
		<view class="uni-container">
			<view class="uni-list-cell" style="margin-top: 5rpx;justify-content: left;">
				<image class="uni-icon" src="../../static/md-person.png" style="margin:5rpx 0 10rpx 30rpx;height: 35rpx;width: 35rpx;"></image>
				<text style="margin:5rpx 0 10rpx 30rpx;font-size: 30rpx;">名单</text>
			</view>
			<view class="uni-list-cell" style="margin-top: 5rpx;justify-content: left;">
				<image class="uni-icon" src="../../static/pomeword.png" style="margin:5rpx 0 10rpx 30rpx;height: 35rpx;width: 35rpx;"></image>
				<text style="margin:5rpx 0 10rpx 30rpx;font-size: 30rpx;">作业</text>
			</view>
			<view class="uni-list-cell" style="margin-top: 5rpx;justify-content: left;">
				<image class="uni-icon" src="../../static/md-people.png" style="margin:5rpx 0 10rpx 30rpx;height: 35rpx;width: 35rpx;"></image>
				<text style="margin:5rpx 0 10rpx 30rpx;font-size: 30rpx;">班级群</text>
			</view>
		</view>
	</view>
</template>

<script>
	import UniCard from "../../components/uni-card/uni-card.vue";
	export default {
		data() {
			return {
				time_span:"一天前",
				annoucement:"公告须知",
				current_class_time:"1",
				current_class_type:"2",
				current_class_teacher:"3"
			}
		},
		methods: {
			
		},
		onShow() {
			// let pagearr = getCurrentPages();//获取应用页面栈
			// let currentPage = pagearr[pagearr.length - 1];//获取当前页面信息
			// console.log('option:' , currentPage.options)//获取页面传递的信息
			this.current_class_time=getApp().globalData.current_class_time;
			this.current_class_teacher=getApp().globalData.current_class_teacher;
			this.current_class_type=getApp().globalData.current_class_type;
			},
		components:{
			UniCard
		}
		// onShow:function(){
		// 	this.current_class_time=getApp.globalData.current_class_time;
		// 	console.log("yes");
		// 	this.current_class_type=getApp.globalData.current_class_type;
		// }
	}
	
</script>

<style>

</style>
