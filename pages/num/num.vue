<template>
	<view class="nums">
		<view class="match-pic">
			<image src="../../static/banner.jpg"></image>
		</view>
		<view class="pic">
			<image src="../../static/num_bg.png"></image>
			<view class="num-info">{{msg}}</view>
		</view>
		<view class="num-desc">当前出场顺序为{{msg}}号</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:''
			}
		},
		onLoad(options) {
           this.msg=options.msg
		},
		methods: {
           
		}
	}
</script>

<style>
page{
	font-size: 14px;
}

.match-pic{
	width: 750upx;
	height: 273upx;
}
.match-pic image{
	width: 100%;
	height: 100%;
	display: block;
}

.pic{
	position: relative;
}

.pic image{
	width:400upx;
	height:385upx;
	display: flex;
	margin:50px auto 15px;
}

.num-info{
	width: 40px;
	text-align: center;
	height: 20px;
	line-height: 20px;
	position:absolute;
	left: 50%;
	top: 50%;
	margin-left:-28px;
	margin-top:-13px;
	font-size: 18px;
	color: #fff;
}
.num-desc{
	text-align: center;
	margin-top: 45px;
	font-size: 18px;
}
</style>
