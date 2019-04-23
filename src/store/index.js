import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  seconds: 10,
  timer: '',
  itemNum: 1,
  questions: [],
  answers: [],
  score: 0,
  showResult: false
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
