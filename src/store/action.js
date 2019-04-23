export default {
  addNum ({commit, state}, id) {
    commit('PUSH_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
      commit('START_TIMER')
    }
  },
  initial ({commit}) {
    commit('INITIAL')
  }
}
