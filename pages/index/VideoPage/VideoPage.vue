<template>
	<view>
		<uni-search-bar :radius="100" @confirm="search" placeholder="蛙泳基础教学" clearButton=auto cancelButton="none" />
		<VideoList></VideoList>
	</view>
</template>

<script>
	import VideoList from "../../../components/VideoList.vue"
	export default {
		data() {
			return {

			}
		},
		components:{VideoList},
		methods: {
			search() {},
		}
	}
</script>

<style>

</style>
