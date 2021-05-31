<template>
	<scroll-view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="i in 3" :key="i">
					<uni-card title="周二游泳初级班" mode="title" :is-shadow="true"
						thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						extra="2021-05-21">
						<view class="text-cut-box">
							13:30在体育馆门口集合，进行身体素质检查，记得穿好适合运动的服装。
						</view>
					</uni-card>
				</swiper-item>
			</swiper>
		</view>
	</scroll-view>
</template>
<script>
	export default {
		name:"NotificationSwiper",
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 1000
			}
		},
		methods: {}
	}
</script>

<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		;
	}

	.swiper {
		height: 350rpx;
	}

	.swiper-item {
		height: 300rpx;
		line-height: 300rpx;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.text-cut-box {
		display: -webkit-box;
		/*设置为弹性盒子*/
		-webkit-line-clamp: 3;
		/*最多显示x行*/
		overflow: hidden;
		/*超出隐藏*/
		text-overflow: ellipsis;
		/*超出显示为省略号*/
		-webkit-box-orient: vertical;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
