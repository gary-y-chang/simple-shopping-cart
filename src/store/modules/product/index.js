import axios from 'axios';

const state = {
  productItems: [] 
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems ({ commit }) {
   
    axios.get(process.env.VUE_APP_API_URL+ '/api/products').then((response) => {
      console.log(' response.data ==> '+ response.data.length)
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  }
}

const getters = {
  productItems: state => state.productItems
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
