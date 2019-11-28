<template>
  <div>

	<!-- 轮播 -->
	<mt-swipe @change="handleChange" >
	  <mt-swipe-item v-for="item in images">
	  	<img :src="item.src" alt="">
	  </mt-swipe-item>
	</mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import image1 from '@/images/1.jpg'
import image2 from '@/images/2.jpg'
import image3 from '@/images/3.jpg'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


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
		img, .mint-swipe{
			width: 100%;
			height: 200px;
		}
</style>
