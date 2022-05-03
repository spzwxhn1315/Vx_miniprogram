// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titles:[
            {id:101, name:'推荐'},
            {id:102, name:'分类'},
            {id:103, name:'最新'},
            {id:104, name:'专辑'}
          ],
          selectPage:0
    },
    onItemChange(e){
        // console.log(e.detail);
        this.setData({
            selectPage:e.detail
        })
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

    }
})