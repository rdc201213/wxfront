<template>
	
	<view class="profile">
		<!-- 顶层图片及头像栏 -->
		<view class="topBackground">
			<image src="../../static/logo.png" mode="aspectFit"></image>
			<view class="flex-item flex-item-V">
				{{message0}}
			</view>
			<view class="flex-item flex-item-V ">
				<text>关注:{{message1}}&nbsp;&nbsp;&nbsp;粉丝：{{message2}}</text>
			</view>
		</view>
		
		<!-- 表单1：昵称、等级、关注用户和粉丝数量 -->
		<view class="firstForm">
			<uni-list>
				<button class= type="primary" open-type="getUserInfo"></button>
				<uni-list-item title="昵称" :clickable="true" @click="login" rightText="小白"></uni-list-item>
				<uni-list-item title="等级" rightText="1"></uni-list-item>
			</uni-list>
		</view>
		
		
		<!-- 表单2：设置、收藏夹、隐私、关于我们 -->
		<view class="secondForm">
			<uni-list>
				<uni-list-item title="设置" link=""></uni-list-item>
				<uni-list-item title="收藏夹" link=""></uni-list-item>
				<uni-list-item title="隐私" link=""></uni-list-item>
				<uni-list-item title="通知提醒":show-switch="true" @switchChange="switchChange" switchChecked="true"></uni-list-item>
				<uni-list-item title="关于我们" link=""></uni-list-item>
			</uni-list>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message0:"userID",
				message1:30,
				message2:40
			}
		},
		login:function(){
			wx.login({
				success:function(res){
					if(res.code){
						wx.request({
							url:app.serverurl+''
						})
					}
				}
			})
		},
		onLoad:function(){
			
		},
		methods: {
			
		}
	}
</script>

<style>
.topBackground{
	width: 750rpx;
	height: 450rpx;
	background-image:url(../../static/background.jpeg);
	background-size: 100% 100%;
}
.topBackground>image{
	width: 100rpx;
	height: 100rpx;
	margin: 50rpx 325rpx 140rpx 325rpx;
}
.topBackground>view{
	margin: 20rpx 0;
	color: #aaaaff;
	text-align: center;
}
.secondForm{
	margin-top: 3rpx;
}
</style>
