const app = getApp();


Page({
	data: {
		estimateScore: {},
		donatePanel: false,
		modalAnimationData: {}
	},
	onShow: function(){
		this.setData({
	        estimateScore: app.globalData.estimateScore,
	        donatePanel: true,
	        modalAnimationData: {}
	    });
	    wx.setNavigationBarTitle({
	    	title: "结果"
	    })
	},
	onLoad: function(){
		console.log("estimate onLoad");
		app.getUserInfo(function(userInfo) {
            //更新数据
            /*that.setData({
                userInfo: userInfo
            })*/
        });
	},
	goback: function(){
		/*this.setData({
			donatePanel: true
		});*/
		wx.navigateBack({
			delta: 1
		});
	},
	rejectCallback: function(){

		let animation = wx.createAnimation({
			transformOrigin: "0 0",
			duration: 200,
        	timingFunction: 'linear',
		});
		animation.rotate(15).step();
		animation.translate(129.4, 500).step();
		this.setData({
	     	modalAnimationData:animation.export()
	    });
	    setTimeout(function(){
	    	this.setData({
	    		donatePanel: false
	    	})
	    }.bind(this), 400);
		
	},
	donateCallback: function(){
		console.log(this.nonceStr(20));
		/*wx.requestPayment({
			'timeStamp': Date.now(),
			'nonceStr': this.nonceStr(20),
   			'package': '',
   			'signType': 'MD5',
   			'paySign': '',
		   	success:function(res){

		   	},
		   	fail:function(res){

		   	}

		})*/
	},

	nonceStr: function(length){
		var base = 'abcdefghijklmnopqrstuvwxyz0123456789';
		var code = '';
		for(let i=0;i<length;i++){
			code += base.charAt(Math.floor(Math.random() * base.length));
		}
		return code;
	},
	onHide: function(){
		
	}
})