var crypto = require('crypto');
var config = require("./config");
var app = getApp();


const payment = {
	// 对象到排序好的字符串方法
	raw: function(args) {  
		var keys = Object.keys(args)  
		keys = keys.sort()  
		var newArgs = {}  
		keys.forEach(function(key) {  
		    newArgs[key] = args[key]  
		})  
		var string = ''  
		for (var k in newArgs) {  
		    string += '&' + k + '=' + newArgs[k]  
		}  
		string = string.substr(1)  
		return string  
	},  
	// 随机数生成算法
	createNonceStr: function() {  
      	return Math.random().toString(36).substr(2, 15)  
  	},
  	// 时间戳
  	createTimeStamp: function() {  
      	return parseInt(new Date().getTime() / 1000) + '';
  	},

  	concatXML: function(obj){
  		let xml="<xml>";
  		for(let key in obj){
  			if(obj.hasOwnPropertyOf(key)){
  				xml+= `<${key}>` + obj[key] + `</${key}>`;
  			}
  		}
  		xml += "</xml>";
  		return xml;
  	},
  	createPaySign: function(ret){
  		var string = this.raw(ret)  
   		string = string + '&key=' + config.key;
  	}
}

function wxpayment(attach, body, mch_id, openid, total_fee, notify_url){
	let data = "";
 	let bookingNo = 'DA' + payment.createNonceStr() + payment.createTimeStamp();
    let appid = config.appId;  
    let nonce_str = this.createNonceStr();  
    let timeStamp = this.createTimeStamp();
    let url = "https://api.mch.weixin.qq.com/pay/unifiedorder"; 

    let ret = {
		appid: appid,
		mch_id: mch_id,
		nonce_str: nonce_str,
		body: body,
		out_trade_no: bookingNo,
		total_fee: total_fee,
		spbill_create_ip: "",
		notify_url: notify_url,
		openid: app.globalData.OpenCode,
		trade_type: "JSAPI",
	}

	let sign = payment.createPaySign(ret);


	wx.request({
		url: "https://api.mch.weixin.qq.com/pay/unifiedorder",
		method: "POST",
		data: data,
		
	});
}





