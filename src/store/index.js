import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [
      {
        id: 1,
        ishot: false,
        img: '/shopImgs/pic_001.jpeg',
        content: '正品耐克Nike Air Force 1定制空军一号De Lo Mio鸳鸯男女板鞋',
        price: '899',
        detail: [
          '/shopImgs/pic_001.jpeg',
          '/shopImgs/pic_014.jpeg',
          '/shopImgs/pic_015.jpeg',
          '/shopImgs/pic_016.jpeg',
          '/shopImgs/pic_017.jpeg'
        ],
        isSelected: false,
        num: 1
      },
      {
        id: 2,
        ishot: false,
        img: '/shopImgs/pic_002.jpeg',
        content: '日本进口缝隙收纳架厨房置物架冰箱夹缝车可移动多层落地超窄柜',
        price: '125',
        detail: [
          '/shopImgs/pic_002.jpeg',
          '/shopImgs/bingxiang_pic001.jpg',
          '/shopImgs/bingxiang_pic002.jpg',
          '/shopImgs/bingxiang_pic003.jpg',
          '/shopImgs/bingxiang_pic004.jpg'
        ],
        isSelected: false,
        num: 1
      },
      {
        id: 3,
        ishot: true,
        img: '/shopImgs/pic_003.png',
        content: 'ASRV休闲运动五分袖男圆领纯色宽松速干T恤oversize健身短袖半袖',
        price: '59.9',
        detail: [
          '/shopImgs/pic_003.png',
          '/shopImgs/short_pic001.jpg',
          '/shopImgs/short_pic002.jpg',
          '/shopImgs/short_pic003.jpg',
          '/shopImgs/short_pic004.jpg'
        ],
        isSelected: false,
        num: 1
      },
      {
        id: 4,
        ishot: false,
        img: '/shopImgs/pic_005.jpeg',
        content: '结婚酒盅婚庆用品 大红色双喜 喜庆敬酒杯 交杯酒杯 陶瓷小号杯',
        price: '29.85',
        detail: [
          '/shopImgs/pic_005.jpeg',
          '/shopImgs/glass_pic001.jpg',
          '/shopImgs/glass_pic002.jpg',
          '/shopImgs/glass_pic003.jpg',
          '/shopImgs/glass_pic004.jpg'
        ],
        isSelected: false,
        num: 1
      }
    ],
    currentItem: {},
    isAllSelected: false
  },
  getters: {
  },
  mutations: {
    addProd (state, shopitem) {
      for (const item of state.shopItems) {
        if (item.id === shopitem.id) {
          item.num++
          return
        }
      }
      Vue.set(shopitem, 'isSelected', false)
      state.shopItems.push(shopitem)
    },
    subProd (state, id) {
      for (const item of state.shopItems) {
        if (item.id === id) {
          item.num--
          return
        }
      }
    },
    setCurrent (state, current) {
      state.currentItem = current
    },
    checked (state, shopitem) {
      let flag = true
      shopitem.isSelected = !shopitem.isSelected
      state.shopItems.forEach(item => {
        if (!item.isSelected) {
          flag = false
        }
      })
      state.isAllSelected = flag
    },
    allChecked (state) {
      state.isAllSelected = !state.isAllSelected
      state.shopItems.forEach((item) => {
        item.isSelected = state.isAllSelected
      })
    }
  }
})
