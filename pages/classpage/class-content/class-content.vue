<template>
	<view>
		<view class="uni-flex uni-row" style="align-items: center;">
			<!-- <view class="text" style="width: 200rpx;">&lt;返回</view> -->
			<view class="text" style="-webkit-flex: 1;flex: 1;text-align: center;font-weight: bold;font-size: 35rpx;">游泳{{current_class_type}}班({{current_class_time}})</view>
			<!-- <view class="text" style="width: 200rpx;"></view> -->
		</view>
		<view>
			<uni-card v-bind:title="title1" v-bind:extra="time_span" isShadow @click=""><text class="content-box-text">{{annoucement}}</text></uni-card>
		</view>
		<view class="uni-container">
			<view class="uni-list-cell" style="margin-top: 5rpx;justify-content: left;" @click="namelist(course_id,current_class_type,current_class_time)">
				<image class="uni-icon" src="../../../static/md-person.png" style="margin:5rpx 0 10rpx 30rpx;height: 35rpx;width: 35rpx;"></image>
				<text style="margin:5rpx 0 10rpx 30rpx;font-size: 30rpx;">名单</text>
			</view>
			<view class="uni-list-cell" style="margin-top: 5rpx;justify-content: left;" @click="homeworks(course_id,current_class_type,current_class_time)">
				<image class="uni-icon" src="../../../static/homework.png" style="margin:5rpx 0 10rpx 30rpx;height: 35rpx;width: 35rpx;"></image>
				<text style="margin:5rpx 0 10rpx 30rpx;font-size: 30rpx;">作业</text>
			</view>
			<view class="uni-list-cell" style="margin-top: 5rpx;justify-content: left;" @click="classgroup(course_id,current_class_type,current_class_time)">
				<image class="uni-icon" src="../../../static/md-people.png" style="margin:5rpx 0 10rpx 30rpx;height: 35rpx;width: 35rpx;"></image>
				<text style="margin:5rpx 0 10rpx 30rpx;font-size: 30rpx;">班级群</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {getLastAnnoucement} from "../../../api/http.js"
	import UniCard from "../../../components/uni-card/uni-card.vue";
	var _self;
	export default {
		data() {
			return {
				course_id:1,
				time_span:"一天前",
				annoucement:"公告须知",
				title1:"公告",
				current_class_time:"1",
				current_class_type:"2",
				current_class_teacher:"teacher"
			}
		},
		methods: {
			namelist(id,a,b){
				uni.navigateTo({
					url: '/pages/classpage/nameList/nameList?course_id='+id+'&name='+a+'&time='+b
				})
			},
			homeworks(id,a,b){
				uni.navigateTo({
					url: '/pages/classpage/homeworks/homeworks?course_id='+id+'&name='+a+'&time='+b
				})
			},
			classgroup(id,a,b){
				uni.navigateTo({
					url: '/pages/classpage/classgroup/classgroup?course_id='+id+'&name='+a+'&time='+b
				})
			},
			
		},
		onLoad:function(option) {
			_self=this;
			this.course_id=option.course_id;
			this.current_class_time=option.time;
			this.current_class_type=option.name;
			getLastAnnoucement(this.course_id)
			.then(res=>{
				_self.annoucement=res.annoucement.content;
				_self.title1=res.annoucement.title;
				var timespan1=res.annoucement.time;
				console.log(timespan1);
				_self.time_span=timespan1.splice(5,10);
			})
			.catch(err=>{
				console.log(err)
			})
		},
		components:{
			UniCard
		}
		
	}
	
</script>

<style>

</style>
