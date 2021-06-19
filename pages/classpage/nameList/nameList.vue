<template>
	<view>
		<view class="uni-flex uni-row" style="align-items: center;">
			<view class="text" style="-webkit-flex: 1;flex: 1;text-align: center;font-weight: bold;font-size: 35rpx;">游泳{{current_class_type}}班名单({{current_class_time}})</view>
		</view>
		<view class="uni-container">
			<view v-for="content in nameList">
				<view class="uni-list-cell">
					<text style="margin-left:25rpx ;">{{content.name}}</text>
					<!-- <text style="margin-right:25rpx ;">{{content.gender}}</text> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getStudent} from '../../../api/http.js'
	
	export default {
		data() {
			return {
				nameList:[
					{
						name:"李伯",
						// gender:"男"
					},
					{
						name:"李伯伯",
						//gender:"女"
					},
				],
				course_id:1,
				current_class_time:"",
				current_class_type:""
			}
		},
		methods: {
			
		},
		onLoad:function(option){
			let _self=this;
			this.course_id=option.course_id;
			this.current_class_time=option.time;
			this.current_class_type=option.type;
			getStudent(course_id)
			.then(res=>{
				_self.nameList=res.student;
			})
			.catch(err=>{
				console.log(err);
			})
		}
	}
</script>

<style>

</style>
