import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [],
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
    },
    deleteMultipe (state) {
      state.shopItems = state.shopItems.filter((item) => item.isSelected === false
      )
    },
    deleteOne (state, id) {
      state.shopItems = state.shopItems.filter((item) => item.id !== id)
    }
  }
})
