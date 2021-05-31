<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="topBackground"></view>
			<view class="text-box" scroll-y="true">
				<text>{{text}}</text>
			</view>
			<view class="uni-btn-v">
				<button type="primary" :disabled="!canAdd" @click="add">{{buttonOne}}</button>
				<button type="warn" :disabled="!canRemove" @click="remove">{{buttonTwo}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				texts:[
					'我们项目是由四人团队开发完成',
					'别问是谁，问就是摸鱼四人组',
					'你问我为啥要做这个项目？',
					'摸鱼仔不需要理由',
					'但是主要是一件事情启发了我们',
					'上个学期选修体育的时候选了游泳',
					'发现有些同学想学习蛙泳以及其他泳姿',
					'但是有没有人教，以及坚持不下去',
					'网上教学实践性太差',
					'以及女票会游泳，自己不会......',
					'不会吧不会吧，你不会真当真了吧',
					'主要是要交项目（款爷应该不会看到这的hhh）',
					'最终解释权归411、413宿舍所有',
					'别点了，真没了',
					'还点，你多少有点不知深浅嗷',
					'差不多行了',
					'好吧，龚哥是gay'
				],
				texts_button1:[
					'点一点试试',
					'你满意了没'
				],
				texts_button2:[
					'暂时点不了哦',
					'点一点试试'
				],
				text:'',
				canAdd:true,
				canRemove:false,
				extraLine:[],
				buttonOne:'点一点试试',
				buttonTwo:'暂时点不了哦'
			}
		},
		methods: {
			add:function(e){
				this.extraLine.push(this.texts[this.extraLine.length%17]);
				this.text=this.extraLine.join('\n');
				this.canAdd=this.extraLine.length<17;
				this.canRemove=this.extraLine.length>0;
				if(this.extraLine.length==17){
					this.buttonOne=this.texts_button1[1];
				}
				else{
					this.buttonOne=this.texts_button1[0];
				}
				if(this.extraLine.length==0){
					this.buttonTwo=this.texts_button2[0];
				}
				else{
					this.buttonTwo=this.texts_button2[1];
				}
			},
			remove:function(e){
				if(this.extraLine.length>0){
					this.extraLine.pop();
					this.text=this.extraLine.join('\n');
					this.canAdd=this.extraLine.length<17;
					this.canRemove=this.extraLine.length>0;
				}
				if(this.extraLine.length==17){
					this.buttonOne=this.texts_button1[1];
				}
				else{
					this.buttonOne=this.texts_button1[0];
				}
				if(this.extraLine.length==0){
					this.buttonTwo=this.texts_button2[0];
				}
				else{
					this.buttonTwo=this.texts_button2[1];
				}
			}
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
.text-box{
	text-align: center;
	line-height: 1.8;
	
}
</style>
