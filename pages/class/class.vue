<template>
	<view>
		<view>
			<view v-for="content in classArray">
				<view class="uni-flex uni-column" style="flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="font-weight: bold;font-size: 35rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">
						游泳{{content.type}}班（{{content.time}})
					</view>
					<view class="uni-list-cell" style="height: 50px;">
						<view class="uni-list-cell-db" style="padding-left: 25rpx;">任课老师{{content.teacher}}</view>
						<button class="mini-btn" type="primary"  size="mini" style="font-size: 5rpx;" @click="classcontent">查看班级>></button>
					</view>
				</view>
			</view>
			
		</view>
		<view class="button-center" style="margin-top: 20rpx;">
			<button class="mini-btn" type="primary"  size="mini" style="margin: 0 auto;">加入班级</button>
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
										name: "游泳2",
										teacher:"teacher2",
										time:"周二"
									},
									{
										type:"高级",
										name: "游泳3",
										teacher:"teacher3",
										time:"周三"
									},
							]
			}
		},
		methods: {
			classcontent(){
				// uni.showToast({
				// 					title:"点击了按钮"
				// 				})
				uni.redirectTo({
				    url: '/pages/class-content/class-content'
				})
			}
		},
	}
</script>


<style>
    button {
        margin-top: 30rpx;
        margin-bottom: 30rpx;
    }
.button-center{
	display: flex;
	flex-direction: column;
	align-items: center;
}
    .button-sp-area {
        margin: 0 auto;
        width: 60%;
    }

    .mini-btn {
        margin-right: 10rpx;
    }
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
</style>
