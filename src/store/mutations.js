import http from '../util/http'
require('../../build/mock.js')

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const PUSH_ANSWER = 'PUSH_ANSWER'
const INITIAL = 'INITIAL'
const START_TIMER = 'START_TIMER'
const SHOW_RESULT = 'SHOW_RESULT'

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
        state.itemNum = 1
        state.score = 0
        state.answers = []
        state.show_result = false
      })
  },
  [START_TIMER] (state) {
    clearInterval(state.timer)
    state.seconds = 10
    state.timer = setInterval(() => {
      state.seconds--
      if (state.seconds < 0) {
        if (state.itemNum < state.questions.length) {
          this.commit('PUSH_ANSWER', null)
          this.commit('ADD_ITEMNUM', 1)
          this.commit('START_TIMER')
        } else {
          this.commit('PUSH_ANSWER', null)
          this.commit('SHOW_RESULT')
        }
      }
    }, 1000)
  },
  [SHOW_RESULT] (state) {
    clearInterval(state.timer)
    state.showResult = true
    for (let i = 0; i < state.questions.length; i++) {
      if (state.answers[i] === state.questions[i].answer_id) {
        state.score += 1
      }
    }
    state.score *= 10
    let index = Math.floor(state.score / 20) - 1
    if (index < 0) index = 0
    state.tip = state.tips[index]
  }
}
