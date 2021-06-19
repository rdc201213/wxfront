<template>
	<view>
		<view class="uni-container">
			<view id="classContent" v-for="(content,index) in classArray">
				<view  v-if="!class_ischeck[index].isCheck" class="uni-list-cell" ref="content.id" style="margin: 5rpx;" @click="toggleMessage(index,content)">
					<view class="uni-list-cell-db" style="padding: 30rpx;font-size: 35rpx;font-weight: bold;">游泳{{content.name}}班（{{content.time}})</view>
					<view class="uni-list-cell-db" style="padding-right: 25rpx;">任课老师:</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//import UniPopup from "../../components/uni-popup/uni-popup.vue";
	import {optionalCourse,joinCourse} from '../../../api/http.js'
	var _self;
	export default {
		data() {
			return {
				//test:1,
				user_id:1,
				current_cid:"",
				current_type:"",
				current_time:"",
				current_content:"",
				class_ischeck:[{
					"isCheck":false
				}],
				classArray:[
									{
										course_id:1,
										name: "高级",
										time:"周二",
									},
									{
										course_id:2,
										name: "高级",
										time:"周二34",
									},
									{
										course_id:3,
										name: "高级",
										time:"周二12",
									},
							],
					
							
			}
		},
		computed:{
			classContent:function(){
				return this.classArray.filter(function(item){
					return !item.isCheck;
				})
			}
		},
		methods: {
			// insertclass(a,b){
			// },
			toggleMessage(index,content) {
				let self=this;
				this.current_cid=content.course_id;
				this.current_type=content.name;
				this.current_time=content.time;
				this.current_content="是否选择游泳"+content.name+"班（"+content.time+")这节课程？"
				uni.showModal({
				    title: '选课提示',
				    content:this.current_content,
				    success: function (res) {
				        if (res.confirm) {
							let obj={
								user_id:self.user_id,
								course_id:self.current_cid
							}
							var objjson=JSON.stringify(obj);
				            //_self.insertclass(1,2);
							joinCourse(objjson)
							.then(res=>{
								console.log(res);
							})
							.catch(err=>{
								console.log(err);
							})
							self.class_ischeck[index].isCheck=true;
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
				},
			
		 },
		onLoad(){
			_self=this;
			optionalCourse(_self.user_id)
			.then(res=>{
				_self.classArray=res.course;
			})
			.catch(err=>{
				console.log(err)
			})
			this.class_ischeck=[];
			var len=this.classArray.length;
			for(var i=0;i<len;i++){
				this.class_ischeck.push({"isCheck":false})
			}
		}
	}
</script>

<style>

</style>
