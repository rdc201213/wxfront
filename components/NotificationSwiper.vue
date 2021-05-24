<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="i in 3" :key="i">
					<uni-card title="Dcloud" mode="title" :is-shadow="true"
						thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						extra="技术没有上限">
						<view class="text-cut-box">display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
							overflow: hidden;
							word-break: break-all; /* break-all(允许在单词内换行。) */
							text-overflow: ellipsis; /* 超出部分省略号 */
							-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
							-webkit-line-clamp: 3; /** 显示的行数 **/
							————————————————
							版权声明：本文为CSDN博主「小也同学」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
							原文链接：https://blog.csdn.net/qq_37734787/article/details/108235785</view>
					</uni-card>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
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
