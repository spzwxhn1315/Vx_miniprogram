// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    coverImgList:[],
    monthDate:'',
    monthData:null,
    hotPrams:{
      skip: 0,
      limit: 12
    },
    hotImgs:[],
    hotToltal:0
  },

  /**
   * 组件的方法列表
   */

  methods: {
    
    //获取主图
    getCoverImg(){
      wx.request({
        url: 'http://118.190.104.39:3000/home/cover',
        success: res=>{
          console.log(res);
          this.setData({
            coverImgList: res.data.data
          })
        }
      })
    },
    //获取月份
    getmonth(){
      wx.request({
        url: 'http://118.190.104.39:3000/home/month',
        success: e =>{
          console.log(e);
          var date = new Date(e.data.data.date);
          this.setData({
            monthDate: date.getDate() + "/" + (date.getMonth() + 1) + "月",
            monthData:e.data.data
          })

        }
      })
    },
    //获取热门
    getHot(){
      wx.showLoading({
        title: '正在加载...',
      })
      wx.request({
        url: 'http://118.190.104.39:3000/home/hot',
        data: this.data.hotPrams,
        success: e =>{
          console.log(e.data);
          this.setData({
            hotImgs: this.data.hotImgs.concat(e.data.data.list),
            hotToltal: e.data.data.total
          })
          wx.hideLoading({
          })
        }
      })

    },
    //加载更多
    loadMore(){
      console.log("----loadMore---");
      if(this.data.hotPrams.skip + this.data.hotPrams.limit >= this.data.hotToltal){
        wx.showLoading({
          title: '当前已全部加载完成',
        })
        return
      }
      this.setData({
        hotPrams:{
          skip: this.data.hotPrams.skip + this.data.hotPrams.limit,
          limit: 12
        } 
      })
      this.getHot()
    }
  },

  lifetimes:{
    attached(){
      //自动获取
      this.getCoverImg();
      this.getmonth();
      this.getHot();
    }
  }
})
