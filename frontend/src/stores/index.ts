import { createStore } from 'vuex';
import { type Category } from '@/types/objects'
import { getCategories } from '@/api/category'
export default createStore({
  state: {
    categories: [],
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setCategories(state:any , categories: Category[]) {
      state.categories = categories
    },
    setToken(state:any, token: string) {
      state.token = token
    }
  },
  actions: {
    async fetchCategories({ commit }: { commit: any }) {
       try {
        const response = await getCategories()
        commit('setCategories', response.data.categories)
       }
        catch (error) {
          console.error(error)
        }
    }
  },
  getters: {
    getCategories(state: any) {
      return state.categories
    }
  }
})