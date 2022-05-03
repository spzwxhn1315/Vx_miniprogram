// pages/imgDetail/imgDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      imgname: options.imgName
    })
  },
  downlownClick(){
    wx.downloadFile({
      url: 'http://118.190.104.39:3000/'  + this.data.imgname,
      success: e =>{
        console.log(e);
        wx.saveImageToPhotosAlbum({
          filePath: 'tempFilePath',
          success: e => {
            wx.showLoading({
              title: '保存成功',
            })
          }
        })
      }
    })
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

  }
})