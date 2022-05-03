// pages/cateDetail/cateDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cid: 0,
        titles:[
            {id:201, name:'热门'},
            {id:202, name:'最新'}
        ],
        cateParam:{
            skip: 0,
            limit: 12,
            order:'hot'
        },
        imgList: [],
        imgTotal: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        this.data.cid = options.cid
    },
    getHotImg(){
        wx.request({
          url: 'http://118.190.104.39:3000/category/' + this.data.cid,
          data: this.data.cateParam,
          success: e =>{
              console.log(e);
              this.setData({
                imgList: e.data.data.list,
                imgTotal: e.data.data.total
              })
          }
        })
    },
    onCateClick(e){
        console.log(e.detail);
        var order = e.detail== 0 ?'hot':'new'
        this.data.cateParam.order = order
        this.data.imgList = []
        this.getHotImg()
    },
    imgClick(e){
        var imgName = e.currentTarget.dataset.imgname
        console.log(e);
        wx.navigateTo({
          url: '/pages/imgDetail/imgDetail?imgName=' + imgName,
        })
    },
    onReady(){
        this.getHotImg()
    }

})