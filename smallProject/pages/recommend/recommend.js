var common = require("../../utils/movie.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "",
    movies: [],
    hidden: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindKeyInput: function (event) {
    var page = this;
    this.setData({ inputValue: event.detail.value });
  },

  search: function () {

    if (this.data.inputValue == "") {
      wx.showModal({
        title: '提示',
        content: '请输入要查询的信息,例如:天下无贼',
        showCancel: false,
        success: function (res) {
          if (res.confirm) { }
        }
      })
      return;
    }

    var page = this;
    wx.request({
      url: "https://api.douban.com/v2/movie/search?q=" + page.data.inputValue,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        common.processSubjects(subjects)
        page.setData({ movies: subjects, hidden: true })
      }
    })
  },
  
  detail: function (e) {
    console.log(e)
    getApp().detail(e);
  },
})