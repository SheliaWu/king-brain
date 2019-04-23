export default {
  addNum ({commit, state}, id) {
    if (state.itemNum < state.questions.length) {
      commit('PUSH_ANSWER', id)
      commit('ADD_ITEMNUM', 1)
      commit('START_TIMER')
    } else {
      this.commit('PUSH_ANSWER', null)
      commit('SHOW_RESULT')
    }
  },
  initial ({commit}) {
    commit('INITIAL')
  }
}
