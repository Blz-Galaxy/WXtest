App({
    onLaunch: function() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function(res) {
                    wx.getUserInfo({
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })

                    that.globalData.OpenCode = res.code;
                }
            })
        }
    },
    globalData: {
        userInfo: null,
        estimateScore: {
            score: 10,
            desc: "可能要跪"
        }
    },
    cloneObject: function(src) {
        var target = {};
        for (var entry in src) {
            if (src.hasOwnProperty(entry)) {
                target[entry] = src[entry];
            }
        }
        return target;
    },
    fillBlank: function(arr, length){
        if(length>arr.length){
            let gap = length - arr.length;
            for(let i = 1; i<= gap; i++){
                arr.push(undefined);
            }
        }
    },
    getRealLength: function(arr){
        let sum = 0;
        for(let i =0; i<arr.length; i++){
            if(arr[i])
                sum++;
        }
        return sum;
    },
    truncateBlank: function(arr){
        var str = "";
        for(var i =0 ;i<arr.length;i++){
            if(arr[i])
                str += arr[i] + ',';
        }
        str = str.slice(0, str.length-1);
        return str;
    }
})
