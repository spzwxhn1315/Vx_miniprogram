// components/category/category.js
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
    categoryImgs: [],
    cid: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //把id传到cateDetail
    imgClick(e){
      console.log(e);
      var imgId = e.currentTarget.dataset.imgid
      wx.navigateTo({
        url: '/pages/cateDetail/cateDetail?cid=' + imgId,
      })
    },
    // cateClick(){

    // }
  },

  lifetimes: {
    attached(){
      wx.request({
        url: 'http://118.190.104.39:3000/category',
        success: e =>{
          console.log(e);
          this.setData({
            categoryImgs: e.data.data
          })
        }
      })
    }
  }
})
