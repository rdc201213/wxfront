<template>
	<view>
		<view class="uni-container">
			<view v-for="content in classArray">
				<view class="uni-list-cell" style="margin: 5rpx;">
					<view class="uni-list-cell-db" style="padding: 30rpx;font-size: 35rpx;font-weight: bold;">游泳{{content.type}}班（{{content.time}})</view>
					<view class="uni-list-cell-db" style="padding-right: 25rpx;">任课老师:{{content.teacher}}</view>
					
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
