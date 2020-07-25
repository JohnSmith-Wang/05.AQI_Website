import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  save(data){
    localStorage.setItem('aqi-fav',JSON.stringify(data))
  },
  load(){
    return JSON.parse(localStorage.getItem('aqi-fav')||'[]')
  }
}

export default new Vuex.Store({
  strict:true,
  state: {
    tagCounty:[]
  },
  getters:{
    favlist(state){
      return state.tagCounty;
    }
  },
  mutations: {
    SET_LIST(state,data){
      state.tagCounty = data;
      LS.save(state.tagCounty);
    },
    ADD_LIST(state,data){
      state.tagCounty.push(data);
      LS.save(state.tagCounty);
    },
    DEL_LIST(state,index){
      state.tagCounty.splice(index,1);
      LS.save(state.tagCounty);
    }
  },
  actions: {
    INIT_LIST({commit}){
      commit('SET_LIST',LS.load())
    }
  },
})
