<template>
	<view>
		<view class="content">
			<!-- 登录注册页面图标 -->
			<view class="avatorWrapper">
				<view class="avator">
					<image class="img" src="../../static/游泳池.png" mode="widthFix"></image>
				</view>
			</view>
			
			<!-- 登录注册信息表单 -->
			<view class="form">
				<view class="inputWrapper">
					<input class="input" type="text" value="" placeholder="请输入手机号"/>
				</view>
				<view class="inputWrapper">
					<input class="input" type="password" value="" placeholder="请输入密码"/>
				</view>
				<view class="loginBtn">
					<text class="btnValue">登录</text>
				</view>
				<view class="forgotBtn">
				    <text>找回密码</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
    .content {
        background: #7dc5eb;
        width: 100vw;
        height: 100vh;
    }
    .avatorWrapper{
        height: 30vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .avator{
        width: 200upx;
        height: 200upx;
        overflow: hidden;
    }
    .avator .img{
        width: 100%
    }
    .form{
        padding: 0 100upx;
        margin-top: 80px;
    }
    .inputWrapper{
        width: 100%;
        height: 80upx;
        background: white;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 0 20px;
        margin-top: 25px;
    }
    .inputWrapper .input{
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 15px;
    }
    .loginBtn{
        width: 100%;
        height: 80upx;
        background: #77B307;
        border-radius: 50upx;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .loginBtn .btnValue{
        color: white;
    }
    .forgotBtn{
        text-align: center;
        color: #EAF6F9;
        font-size: 15px;
        margin-top: 20px;
    }
</style>
