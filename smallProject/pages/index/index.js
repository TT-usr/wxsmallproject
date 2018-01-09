//index.js


var common = require('../../module/common.js')


//获取应用实例
var app = getApp()
// 打印全局消息
console.log(app.globalData)
Page({
  // 页面初始数据
  data: {
    motto: 'Hello World',
    userInfo: {},
    array : [{msg : 1}, {msg : 2}]
  },
  //事件处理函数
  bindViewTap: function() {
    // 跳转
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log('生命周期函数--监听页面加载', options)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    console.log("生命周期函数--监听页面初次渲染完成")
  },
  onShow:function(){
    console.log("生命周期函数--监听页面显示")
  },
  onHide:function(){
    console.log("生命周期函数--监听页面隐藏")
  },
  onUnload:function(){
    console.log("生命周期函数--监听页面卸载")
  },
  onPullDownRefresh:function(){
    console.log("页面相关事件处理函数--监听用户下拉动作")
  },
  onReachBottom:function(){
    console.log("页面上拉触底事件的处理函数")
  },
  onShareAppMessage:function(){
    console.log("用户点击右上角转发")
  },
  onPageScroll:function(options){
    // scrollTop 页面在垂直方向已滚动的距离
    console.log("页面滚动", options.scrollTop, "px")
  },
  onShareAppMessage: function(){
    return{
      // title 默认为:当前小程序名称
      title:'自定义转发标题',
      // 当前页面 path ，必须是以 / 开头的完整路径
      path :'/pages/index?id=123'
    }
  },
  // 页面的手势绑定事件
  viewTap :function(){
    this.setData({
      motto: '我改变了',
      'array[0].msg' : 3
    }, function(){
      common.sayHello("Jack")
      console.log("点击了屏幕")
    })
  },
  customData:{
    hi :"MINA"
  }
})
