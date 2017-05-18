
const app = getApp();
const util = require("./util");
const raid = require("./raid-figure");


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
	    
	    this.chart.legion1 = new raid({
			el: "raidfigure",
			center: {x: 80, y: 80},
			data: app.globalData.legion1,
			color: "green"
		});

		 this.chart.legion2 = new raid({
			el: "raidfigure2",
			center: {x: 80, y: 80},
			data: app.globalData.legion2,
			color: "red"
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
		this.chart.legion1.drawData();
		this.chart.legion2.drawData();
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
	recogonizeCode: function(){
		console.log("long tap");
		wx.scanCode({
			success: function(res){
				console.log(res);
			},
			fail: function(err){
				console.log(err);
			}
		});
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