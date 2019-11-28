<template>
  <div id="root">
	<!-- 头部 -->
	<Header :title="headerOption.title" :fixed="headerOption.fixed"/>
	<!-- 露个坑 -->
	<router-view></router-view>

	<!-- 底部 -->
	<div>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'

export default {
	data: function() {
		return {
			headerOption: {
				title: "磊哥的程序",
				fixed: true
			},
			images: [
				{src: image1},
				{src: image2},
				{src: image3}
			]
		}
	},
	methods: {
		handleChange: function(index) {
			console.log(index);
		}	
	}
}
</script>

<style lang="scss" scoped> 
	#root {
		width: 100%;
		height: 100%;
		padding-top: 40px;
		img, .mint-swipe{
			width: 100%;
			height: 200px;
		}

	}
</style>
