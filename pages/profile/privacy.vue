<template>
	<view>
		<view class="topBackground">
			<image src="../../static/logo.png" mode="aspectFit"></image>
			<u-cell-group>
				<u-cell-item title="用户名" value=""></u-cell-item>
				<u-cell-item title="昵称" value=""></u-cell-item>
				<u-cell-item title="性别" :value="sex" @click='selectSex'></u-cell-item>
				<u-cell-item title="生日" :value="birthday" @click='show=true'></u-cell-item>
				<u-calendar v-model="show" @change="change"></u-calendar>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headImg: '/static/logo.png',
				sex: '男',
				birthday: '请选择生日',
				show: false
			}
		},
		methods: {
			changeHead() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.headImg = res.tempFilePaths[0]
					}
				});
			},
			selectSex() {
				const arr = ['男', '女', '保密']
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this.sex = arr[res.tapIndex]
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			change(e) {
				this.birthday = e.result
			}
		}
	}
</script>

<style>
	.topBackground {
		width: 750rpx;
		height: 450rpx;
		background-size: 100% 100%;
	}

	.topBackground>image {
		width: 100rpx;
		height: 100rpx;
		margin: 50rpx 325rpx 140rpx 325rpx;
	}
</style>
