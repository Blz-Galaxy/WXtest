const app = getApp();
Page({
	data: {
		estimateScore: {},
		donatePanel: false
	},
	onShow: function(){
		this.setData({
	        estimateScore: app.globalData.estimateScore,
	        donatePanel: true
	    });
	    wx.setNavigationBarTitle({
	    	title: "结果"
	    })
	},
	onLoad: function(){
		console.log("estimate onLoad");
	},
	goback: function(){
		/*this.setData({
			donatePanel: true
		});*/
		wx.navigateBack({
			delta: 1
		});
	},
	onHide: function(){
		
	}
})