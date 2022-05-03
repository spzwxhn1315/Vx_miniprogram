// pages/components/homeTitle/homeTitle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currNum:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    titleClick(e){
      var index = e.currentTarget.dataset.index
      // console.log(index);
      this.setData({
        currNum:index
      })
      this.triggerEvent('itemChange', index)
    }
  }
})
