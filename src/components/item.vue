<template>
  <div class="item">
    <div class="timer">{{seconds}}</div>
    <div class="title">{{itemNum}}.{{questions[itemNum-1].question}}</div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in questions[itemNum-1].items" @click="choosed(index)" v-bind:key="index" class="item_list">
          <span class="option_style" v-bind:class="{'has_choosed':choosedId==index}">{{chooseType(index)}}</span>
          <span class="option_detail">{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "item",
  data () {
    return {
      itemId: null,
      choosedId: null
    }
  },
  created () {
  },
  computed: mapState([
    'itemNum',
    'questions',
    'seconds',
    'showResult'
  ]),
  methods: {
    ...mapActions([
      'addNum',
      'initial'
    ]),
    next () {
      this.addNum(this.choosedId)
      this.choosedId = null
    },
    chooseType: type => {
      switch (type) {
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    choosed (id) {
      this.choosedId = id
      setTimeout(() => {
        this.next()
      }, 500)
    },
    show () {
      if(this.showResult){
        this.$router.push('show')
      }  
    }
  },
  watch:{
    showResult(){
      this.show()
    }
  }  
}
</script>
<style lang="less">
	.item{
    width:90%;
    height: 40%;
    position: absolute;
    top:10%;
    left: 5%;
    background: #fff;
    border-radius: 1rem;
    padding: 0  0.5rem;
    box-sizing: border-box;
    .timer{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-left: 50%;
      background:#fff;
      transform: translate(-50%,-50%);
      text-align: center;
      line-height: 2rem;
    }
    .title{
      font-size: 0.85rem;
      text-align: left;
    }
    ul{
      list-style-type: none;
      padding: 0;
      margin: 0.5rem 0;
    }
    li{
      text-align:left;
    }
		span{
			display: inline-block;
			font-size: 0.8rem;
			vertical-align: middle;
		}
		.option_style{
			height: 0.9rem;
			width: 0.9rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.9rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>
