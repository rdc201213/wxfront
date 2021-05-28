<template>
	<view>
		<uni-data-checkbox mode="button" icon="right" v-model="value" :multiple="true" :localdata="range"
			@change="change" class="select-box"></uni-data-checkbox>
		<view class="uni-list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="goDetail(value)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.cover"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ value.title }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.author_name }}</text>
								<text>{{ value.published_at }}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- #ifdef APP-PLUS -->
				<view class="ad-view" v-if="(index > 0 && (index+1) % 10 == 0)">
					<ad :adpid="adpid" @error="aderror"></ad>
				</view>
				<!-- #endif -->
			</block>
		</view>
		<uni-load-more :status="status" :icon-size="16" :content-text="contentText" />
	</view>
</template>

<script>
	var dateUtils = require('../common/util.js').dateUtils;

	export default {
		name: "VideoList",
		data() {
			return {
				value: [0, 1, 2],
				range: [{
					"value": 0,
					"text": "教学类"
				}, {
					"value": 1,
					"text": "训练类"
				}, {
					"value": 2,
					"text": "其他"
				}],
				banner: {},
				listData: [],
				last_id: '',
				reload: false,
				status: 'more',
				adpid: '',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			};
		},
		onLoad() {
			this.adpid = this.$adpid;
			this.getBanner();
			this.getList();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.last_id = '';
			this.getBanner();
			this.getList();
		},
		onReachBottom() {
			this.status = 'more';
			this.getList();
		},
		methods: {
			change(e) {
				console.log('e:', e);
			},
			getBanner() {
				let data = {
					column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
				};
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/banner/36kr',
					data: data,
					success: data => {
						uni.stopPullDownRefresh();
						if (data.statusCode == 200) {
							this.banner = data.data;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				});
			},
			getList() {
				var data = {
					column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
				};
				if (this.last_id) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
					data.minId = this.last_id;
					data.time = new Date().getTime() + '';
					data.pageSize = 10;
				}
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: data => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				});
			},
			goDetail: function(e) {
				// 				if (!/前|刚刚/.test(e.published_at)) {
				// 					e.published_at = dateUtils.format(e.published_at);
				// 				}
				let detail = {
					author_name: e.author_name,
					cover: e.cover,
					id: e.id,
					post_id: e.post_id,
					published_at: e.published_at,
					title: e.title
				};
				uni.navigateTo({
					url: '../list2detail-detail/list2detail-detail?detailDate=' + encodeURIComponent(JSON
						.stringify(detail))
				});
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach(e => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: dateUtils.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
			},
			aderror(e) {
				console.log("aderror: " + JSON.stringify(e.detail));
			}
		}
	};
</script>

<style>
	.select-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.uni-media-list-logo {
		width: 180rpx;
		height: 140rpx;
	}

	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}

	.uni-media-list-text-top {
		height: 74rpx;
		font-size: 28rpx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
