// components/album/album.js
Component({
     /**
   * 组件的初始数据
   */
  data: {
    // 项目根路径
    baseUrl: 'http://118.190.104.39:3000/',
    // 专辑列表数据
    list: [],
    // 请求参数
    params: {
      skip: 0,
      limit: 12
    },
    // 专辑总数
    total: 0
  },
  lifetimes: {
    attached() {
      this.getAlbum()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getAlbum() {
      wx.showLoading({
        title: '数据加载中'
      })
      wx.request({
        url: 'http://118.190.104.39:3000/album',
        data: this.data.params,
        success: res => {
          this.setData({
            list: res.data.data.list,
            total: res.data.data.total
          })
          wx.hideLoading()
        }
      })
    },
      //点击跳转到详情页面
      goAlbumDetail(e){
        //2.通过循环项的索引拿到当前项的这条数据；---- index
        //console.log(e.currentTarget.dataset.index)
        //根据事件对象拿到存储进来的index索引值
        var index = e.currentTarget.dataset.index
        //根据索引值，找到全局list里面的那条数据
        var item = this.data.list[index]
        //3.把这条数据存储到小程序数据共享里
        var app = getApp()
        app.item = item
        //4.使用js方法实现页面跳转
        wx.navigateTo({
         url:"/pages/albumDetail/albumDetail"
        })
       }
  }
})
