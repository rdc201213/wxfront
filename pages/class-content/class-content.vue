<template>
	<view>
		<view class="uni-flex uni-row">
			<view class="text" style="width: 200rpx;">&lt;返回</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">游泳{{current_class_type}}班({{current_class_time}})</view>
			<view class="text" style="width: 200rpx;"></view>
		</view>
		<view>
			<uni-card title="公告" extra="{time_span}" isShadow note="Tips" @click=""><text class="content-box-text">{{annoucement}}</text></uni-card>
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
