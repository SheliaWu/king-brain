var Mock = require('mockjs')
var Random = Mock.Random

const makeQuestions  = function(){
    let arr = []
    for(let i=0;i<10;i++){
        let question = Random.csentence()
        let items = [Random.cword(2,8),Random.cword(2,8),Random.cword(2,8),Random.cword(2,8)]
        let answer_id = Random.integer(0,3)
        arr.push({"id":i, question, items,  answer_id})
    }
    return {
        data:arr
    }
}
Mock.mock('/api/make_question', 'get', makeQuestions)

