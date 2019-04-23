<template>
  <div class="item">
    <div class="timer">{{seconds}}</div>
    <div class="title">{{questions[itemNum-1].question}}</div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in questions[itemNum-1].items" @click="choosed(index)" v-bind:key="index" class="item_list">
          <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
          <span class="option_detail">{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { clearInterval } from 'timers';
export default {
  name: "item",
  data () {
    return {
      itemId: null,
      choosedId: null,
      choosedNum: null
    }
  },
  created () {
  },
  computed: mapState([
    'itemNum',
    'questions',
    'timer',
    'seconds'
  ]),
  methods: {
    ...mapActions([
      'addNum',
      'initial'
    ]),
    next () {
      this.choosedNum = null
      this.addNum(this.choosedId)
    },
    chooseType: type => {
      switch (type) {
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    choosed (type, id) {
      this.choosedNum = type
      this.choosedId = id
    },
    complete () {
      this.addNum(this.choosedId)
      clearInterval(this.timer)
      this.$router.push('show')
    }
  }   
}
</script>
<style lang="less">
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: #00e;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
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
