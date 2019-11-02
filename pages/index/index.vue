<template>
	<view class="match">
		<view class="match-pic">
			<image src="../../static/banner.jpg"></image>
		</view>
		<view class="match-item" v-for="(item,index) of matchList">
			<view class="item-left">
				<image :src="item.addr"></image>
			</view>
			<view class="item-right">
				<view class="item-title">{{item.name}}</view>
				<view class="item-bot">
					<view class="bot-left">
						<image src="../../static/icon.png"></image>
						<text class="nums">共{{item.num}}人</text>
					</view>
					<view class="bot-right" @click="addInfo(item.name)">报名</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import site from '../../config.js'
	export default {
		data() {
			return {
				matchList:[]
			}
		},
		onLoad() {
			/*根据code获取openid*/
			// var href = window.location.search;// 得到：?sceneid=h5&wxcode=xxx&puid=fff
			// var tmpParas=this.GetRequestParameters(href);
			// var code = tmpParas["code"];//提取参数
			// //alert(code);
			// uni.request({
			// 	url: site.url+'/addMember',
			// 	method:'POST',
			// 	data:{
			// 		card:code
			// 	},
			// 	header: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	success: function(res) {
			// 		console.log('res',res);
			// 		// uni.setStorageSync('openId',res.data.data.openId);
			// 		// uni.setStorageSync('userId',res.data.data.id);
			// 		//uni.setStorageSync('openId','oWuOqwngKItjlvXNeC6KyaTqcCQ8');
			// 	},
			// 	error:function(res){
			// 		//alert('err',res);
			// 	}
			// });
			
			//列表
            uni.request({
            	url:site.url+'qryEvent',
				data:{},
				header: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				success:(res)=>{
					this.matchList=res.data.rows;
					console.log('res',res);
				}
            })
		},
		methods: {
           addInfo(name){
			   uni.navigateTo({
			   	url:'../info/info?name='+name
			   })
		   },
		   // GetRequestParameters(locationsearch){
		   // 
		   // 	let url = locationsearch;  
		   // 	let theRequest = new Object();  
		   // 	if (url.indexOf("?") != -1) {  
		   // 		let str = url.substr(1);  
		   // 		let strs = str.split("&");  
		   // 		for (let i = 0; i < strs.length; i++) {  
		   // 			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);  
		   // 		}  
		   // 	}  
		   // 	return theRequest; 
		   // }
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
}
.match-item{
	display: flex;
	padding: 15px 8px;
	border-bottom: 1px solid #f0eff5;
}
.item-left{
	margin-right: 13px;
}
.item-left image{
	width:80px;
	height: 80px;
	display: flex;
}
.item-right{
	display: flex;;
	flex-direction: column;
	height: 80px;
	justify-content: space-between;
	align-content:space-between;
	width: 631px;
}
.item-bot{
	display: flex;
	justify-content: space-between;
}
.bot-left{
	display: flex;
	align-items: center;
	color: #9b999a;
}
.bot-left image{
	width: 22px;
	height: 22px;
	margin-right: 4px;
}
.bot-right{
	width: 80px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	background: #a20606;
	color: #fff;
	border-radius: 10px;
}
</style>
