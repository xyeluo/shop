import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [],
    currentItem: {}
  },
  getters: {
  },
  mutations: {
    addProd (state, shopitem, DetailAddNum = false) {
      for (const item of state.shopItems) {
        if (item.id === shopitem.id) {
          item.num++
          return
        }
      }
      DetailAddNum = DetailAddNum ? 2 : DetailAddNum
      Vue.set(shopitem, 'num', 2)
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
    }
  }
})
