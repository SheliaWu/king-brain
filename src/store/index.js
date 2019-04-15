import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  questions: [],
  answers: []
}
export default new Vuex.Store({
  state
})
