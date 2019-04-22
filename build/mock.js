var Mock = require('mockjs')
var fs =  require('fs')
var Random = Mock.Random

var  arr = []
const makeQuestions  = function(){
    for(let i=0;i<10;i++){
        let question = Random.csentence()
        let items = [Random.cword(2,8),Random.cword(2,8),Random.cword(2,8),Random.cword(2,8)]
        let answer = Random.integer(0,3)
        arr.push({"id":i, question, items,  answer})
    }

    return {
        questions:arr
    }
}

Mock.mock('','post',makeQuestions)

