(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fd0b8a6"],{3958:function(e,t,a){e.exports=a.p+"img/S.1db749bc.svg"},4472:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",{staticClass:"header"},[a("div",{staticClass:"header-text"},[e._v("付款给"+e._s(e.payOrderInfo.mchName))]),a("div",{staticClass:"header-img"},[a("img",{attrs:{src:e.avatar?e.avatar:e.icon_member_default,alt:""}})])]),a("div",{staticClass:"plus-input"},[e._m(0),a("div",{staticClass:"input-c"},[a("div",{staticClass:"input-c-div-1"},[e._v(e._s(e.payOrderInfo.amount/100))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.amount,expression:"!amount"}],staticClass:"placeholder"},[e._v("请输入金额")])]),a("ul",{staticClass:"plus-ul"},[a("li",{staticStyle:{"border-radius":"10px"}},[a("div",{staticClass:"img-div"},[a("img",{attrs:{src:e.wxImg,alt:""}}),a("div",{staticClass:"div-text"},[e._v(" 微信支付 ")])])])]),a("div",{staticClass:"bnt-pay"},[a("div",{staticClass:"bnt-pay-text",staticStyle:{"background-color":"#07c160"},on:{click:e.pay}},[e._v(" 付款 ")])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"S"},[r("img",{attrs:{src:a("3958"),alt:""}})])}],i=a("4ec3"),s=a("f121"),d={data:function(){return{merchantName:"jeepay",avatar:a("cbee"),amount:1,resData:{},wxImg:a("cbee"),payOrderInfo:{}}},mounted:function(){this.setPayOrderInfo(!0)},methods:{setPayOrderInfo:function(e){var t=this;Object(i["b"])().then((function(a){t.payOrderInfo=a,e&&t.pay()})).catch((function(e){t.$router.push({name:s["a"].errorPageRouteName,params:{errInfo:e.msg}})}))},pay:function(){var e=this;Object(i["c"])(this.amount).then((function(t){return"0"!=t.code?alert(t.msg):1!=t.data.orderState?alert(t.data.errMsg):(e.resData=t.data,void("undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady)):e.onBridgeReady()))})).catch((function(t){e.$router.push({name:s["a"].errorPageRouteName,params:{errInfo:t.msg}})}))},onBridgeReady:function(){var e=this;WeixinJSBridge.invoke("getBrandWCPayRequest",JSON.parse(e.resData.payInfo),(function(t){"get_brand_wcpay_request:ok"==t.err_msg&&(e.payOrderInfo.returnUrl?location.href=e.payOrderInfo.returnUrl:(alert("支付成功！"),window.WeixinJSBridge.call("closeWindow"))),"get_brand_wcpay_request:cancel"==t.err_msg&&(alert("支付取消"),window.WeixinJSBridge.call("closeWindow")),"get_brand_wcpay_request:fail"==t.err_msg&&(alert("支付失败:"+JSON.stringify(t)),window.WeixinJSBridge.call("closeWindow")),"total_fee"==t.err_msg&&(alert("缺少参数"),window.WeixinJSBridge.call("closeWindow"))}))}}},c=d,o=(a("d223"),a("2877")),u=Object(o["a"])(c,r,n,!1,null,"5eb76256",null);t["default"]=u.exports},cbee:function(e,t,a){e.exports=a.p+"img/wx.ec067f2f.svg"},d223:function(e,t,a){"use strict";a("f362")},f362:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3fd0b8a6.3548fd9b.js.map