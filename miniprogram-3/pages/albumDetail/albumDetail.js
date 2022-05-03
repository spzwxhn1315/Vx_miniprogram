// pages/albumDetail/albumDetail.js
Page({

    data: {
        //接收专辑列表页面传递过来的数据
         album:[],
          //接收专辑详情页面列表数据
         list:[],
        //定义根路径
        baseURL:"http://118.190.104.39:3000/",
        //定义数据请求的参数集合
        params:{
          skip:0,
          limit:12
        },
        //数据的总条数
        total:0
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
          //通过小程序全局数据共享拿到上个页面存进去的数据
          var app = getApp()
          //console.log(app.item)
          //更新到全局的data里
          this.setData({
            album: app.item
          })
          //console.log(this.data.album)
          //调用获取列表数据的方法
          this.getAlbumList()
        },
        //定义获取列表数据的方法
        getAlbumList(){
          wx.showLoading({
            title:'数据在路上'
          })
          wx.request({
            url: 'http://118.190.104.39:3000/album/'+this.data.album.id,
            data:this.data.params,
            success:(res)=>{
              //console.log(res.data.data)
              this.setData({
                list:[...this.data.list,...res.data.data.list],
                total:res.data.data.total
              })
              wx.hideLoading()
            }
          })
        },
         //使用页面自带的触底事件实现分页功能
         onReachBottom(){
           if(this.data.params.skip >= this.data.total){
             wx.showToast({
               title: '我是有底线的'
             })
             return
           }
           var params = this.data.params
           params.skip += 12
           this.setData({
             params:params
           })
            //调用获取列表数据的方法
          this.getAlbumList()
         }
      
})