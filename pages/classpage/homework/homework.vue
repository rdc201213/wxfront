<template>
	<view>
		<view class="uni-flex uni-row" style="align-items: center;">
			<!-- <view class="text" style="width: 200rpx;">&lt;返回</view> -->
			<view class="text" style="-webkit-flex: 1;flex: 1;text-align: center;font-weight: bold;font-size: 35rpx;">作业</view>
			<!-- <view class="text" style="width: 200rpx;"></view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				course_id:1,
				current_class_time:"1",
				current_class_name:"2"
			}
		},
		methods: {
			
		},
		onLoad:function(option) {
			_self=this;
			this.course_id=option.course_id;
			this.current_class_time=option.time;
			this.current_class_name=option.name;
		}
	}
</script>

<style>

</style>
