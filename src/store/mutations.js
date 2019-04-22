import http from '../util/http'

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const PUSH_ANSWER = 'PUSH_ANSWER'
const INITIAL = 'INITIAL'

export default {
  [ADD_ITEMNUM] (state, num) {
    state.itemNum += num
  },
  [PUSH_ANSWER] (state, id) {
    state.answers.push(id)
  },
  [INITIAL] (state) {
    http.get('./makeQuestion', res => {
      state.questions = res
    })
  }
}
