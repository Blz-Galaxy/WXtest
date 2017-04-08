
const app = getApp();
const util = require("./util");

Page({
	data: {
		estimateScore: {},
		donatePanel: false,
		modalAnimationData: {},
		runningScore: 0.0,
		pinTrans: 0,
		consclusion: ""
	},
	chart: {},
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
	showScore: function(){
		let score = this.data.estimateScore.score;
		let desc = this.data.estimateScore.desc;
		let that = this;
		this.setData({
			pinTrans: score - 5
		});
		let timeall = 600;
		let startTime = Date.now();
		let last_now = startTime;
		let targetTime = last_now + timeall;
		let easeOut = util.easeOutQuart;
		function changeScore(){
			if(last_now > targetTime) {
				that.setData({
					runningScore: (score - 5).toFixed(2),
					consclusion: desc 
				});
				return
			}
			setTimeout(()=>{
				let now = Date.now();
				let t = (now - startTime) / timeall;
				let s = easeOut(t) * (score - 5);

				that.setData({
					runningScore: s.toFixed(2)
				});
				last_now = now;
				changeScore();
			});
		}
		changeScore();
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
		this.showScore();
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