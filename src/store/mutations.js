import http from '../util/http'
require('../../build/mock.js')

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const PUSH_ANSWER = 'PUSH_ANSWER'
const INITIAL = 'INITIAL'
const START_TIMER = 'START_TIMER'

export default {
  [ADD_ITEMNUM] (state, num) {
    state.itemNum += num
  },
  [PUSH_ANSWER] (state, id) {
    state.answers.push(id)
  },
  [INITIAL] (state) {
    http.get('/api/make_question')
      .then(res => {
        state.questions = res.data
      })
  },
  [START_TIMER] (state) {
    state.seconds = 10
    state.timer = setInterval(() => {
      state.seconds--
      if (state.seconds === 0) {
        clearInterval(state.timer)
      }
    }, 1000)
  }
}
