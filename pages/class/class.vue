<template>
	<view>
		
		<view>
			<uni-notice-bar :scrollable="true" :single="true":show-close="true" :show-icon="true" style="margin-bottom: 0;" text="周一78节李老师游泳高级班开班啦!!!" />
			<swiper style="margin-top:0 ;" class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				<swiper-item>
					<view class="swiper-item uni-bg-red"><image src="../../static/background.jpeg"/></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green"><image style="width: 300rpx; height: 300rpx;" src="../../static/游泳.png"/></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<view v-for="content in classArray">
				<view class="uni-flex uni-column" style="flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="font-weight: bold;font-size: 35rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">
						游泳{{content.type}}班（{{content.time}})
					</view>
					<view class="uni-list-cell" style="height: 50px;">
						<view class="uni-list-cell-db" style="padding-left: 25rpx;">任课老师{{content.teacher}}</view>
						<button class="mini-btn" type="primary"  size="mini" style="font-size: 25rpx;" @click="classcontent(content.type,content.time)">查看班级>></button>
					</view>
				</view>
			</view>
		
		</view>
		<view class="button-center" style="margin-top: 20rpx;">
			<button class="mini-btn" type="primary"  size="mini" style="margin: 0 auto;" @click="addclass()">加入班级</button>
		</view>
	</view>
</template>

<script>
	import UniNoticeBar from "../../components/uni-notice-bar/uni-notice-bar.vue"; 
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
			classcontent(a,b){
				// uni.showToast({
				// 					title:"点击了按钮"
				// 				})
				uni.navigateTo({
				    //url: '/pages/class-content/class-content?type=1'
					url: '/pages/class-content/class-content?type='+a+'&time='+b
				})
			},
			addclass(){
				
				uni.navigateTo({
				    url: '/pages/add-class/add-class'
				})
			}
		},
		components:{
			UniNoticeBar
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
	.swiper {
		height: 300rpx;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
</style>
