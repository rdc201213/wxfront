<template>
	<view>
		<view v-for="content in classArray">
			<view class="uni-flex uni-column" style="flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text" style="font-size: 30rpx;height: 120rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">
					游泳{{content.type}}班（{{content.time}})
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="-webkit-flex: 1;flex: 1;">任课老师：{{content.teacher}}</view>
					<view style="justify-content:flex-end;color:#c4c8c3;font-size: 18rpx;">查看详情>></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classArray:[
									{
										type:"高级",
										name: "游泳1",
										teacher:"teacher1",
										time:"周二"
									},
									{
										type:"高级",
										name: "游泳1",
										teacher:"teacher1",
										time:"周二"
									},
									{
										type:"高级",
										name: "游泳12",
										teacher:"teacher2",
										time:"周四"
									},
							],
							
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
