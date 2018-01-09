//app.js
App({
  onLaunch: function (options) {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log(1,logs)
  },
  onShow: function (options){
  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  // path : 打开小程序的路径
  // query : 打开小程序的query
  // scene : 打开小程序的场景值
  // shareTicket
  // referrerInfo : 当场景为由从另一个小程序或公众号或App打开时，返回此字段
  // referrerInfo.appId : 来源小程序或公众号或App的 appId
  // referrerInfo.extraData	: 来源小程序传过来的数据，scene=1037或1038时支持
  console.log(options)
  },
  onHide:function(){
  // 当小程序从前台进入后台，会触发 onHide
  },
  onError:function(msg){
  // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  console.log(msg)
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          console.log(res.userInfo)
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    msg : "我是全局消息",
    baseurl : "https://apigo.holoread.news/api/v1"
  }
})
