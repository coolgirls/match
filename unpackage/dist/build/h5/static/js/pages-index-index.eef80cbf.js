(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"160c":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a45f")),s={data:function(){return{matchList:[]}},onLoad:function(){var t=this;uni.request({url:n.default.url+"qryEvent",data:{},header:{"Content-Type":"application/json"},method:"POST",success:function(e){t.matchList=e.data.rows,console.log("res",e)}})},methods:{addInfo:function(t){uni.navigateTo({url:"../info/info?name="+t})}}};e.default=s},4285:function(t,e,i){"use strict";var a=i("910f"),n=i.n(a);n.a},"910f":function(t,e,i){var a=i("d20e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f6a46392",a,!0,{sourceMap:!1,shadowMode:!1})},a45f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="http://online.fonery.cn/rankingManage/app/",n={url:a};e.default=n},ad35:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"match"},[i("v-uni-view",{staticClass:"match-pic"},[i("v-uni-image",{attrs:{src:"../../static/banner.jpg"}})],1),t._l(t.matchList,function(e,a){return i("v-uni-view",{staticClass:"match-item"},[i("v-uni-view",{staticClass:"item-left"},[i("v-uni-image",{attrs:{src:e.addr}})],1),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"item-bot"},[i("v-uni-view",{staticClass:"bot-left"},[i("v-uni-image",{attrs:{src:"../../static/icon.png"}}),i("v-uni-text",{staticClass:"nums"},[t._v("共"+t._s(e.num)+"人")])],1),i("v-uni-view",{staticClass:"bot-right",on:{click:function(i){i=t.$handleEvent(i),t.addInfo(e.name)}}},[t._v("报名")])],1)],1)],1)})],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},afa6:function(t,e,i){"use strict";i.r(e);var a=i("160c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},b01b:function(t,e,i){"use strict";i.r(e);var a=i("ad35"),n=i("afa6");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("4285");var c=i("2877"),l=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"8a3c1c24",null);e["default"]=l.exports},d20e:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-8a3c1c24]{font-size:14px}.match-pic[data-v-8a3c1c24]{width:%?750?%;height:%?273?%}.match-pic uni-image[data-v-8a3c1c24]{width:100%;height:100%}.match-item[data-v-8a3c1c24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15px 8px;border-bottom:1px solid #f0eff5}.item-left[data-v-8a3c1c24]{margin-right:13px}.item-left uni-image[data-v-8a3c1c24]{width:80px;height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.item-right[data-v-8a3c1c24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:80px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;width:631px}.item-bot[data-v-8a3c1c24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.bot-left[data-v-8a3c1c24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#9b999a}.bot-left uni-image[data-v-8a3c1c24]{width:22px;height:22px;margin-right:4px}.bot-right[data-v-8a3c1c24]{width:80px;height:30px;line-height:30px;text-align:center;background:#a20606;color:#fff;border-radius:10px}",""])}}]);