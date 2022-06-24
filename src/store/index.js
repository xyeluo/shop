import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [],
    currentItem: {},
    isAllSelected: false,
    currentUser: ''
  },
  mutations: {
    // 增加商品
    addProd (state, shopitem) {
      for (const item of state.shopItems) {
        if (item.id === shopitem.id) {
          item.num++
          this.commit('setLocalShopping')
          return
        }
      }
      Vue.set(shopitem, 'isSelected', false)
      state.shopItems.push(shopitem)
      this.commit('setLocalShopping')
    },
    // 减少商品
    subProd (state, id) {
      for (const item of state.shopItems) {
        if (item.id === id) {
          item.num--
          this.commit('setLocalShopping')
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
    },
    setUser (state, user) {
      state.currentUser = user
      this.commit('getShopping')
    },
    getShopping (state) {
      let shopItems = localStorage.getItem(state.currentUser)
      if (shopItems === null) {
        Vue.set(state, 'shopItems', [])
        this.commit('setLocalShopping')
        return
      }
      shopItems = JSON.parse(shopItems)
      state.shopItems = shopItems.filter(() => {
        return true
      })
    },
    setLocalShopping (state) {
      localStorage.setItem(state.currentUser, JSON.stringify(state.shopItems))
    },
    logout (state) {
      state.currentUser = ''
    }
  }
})
