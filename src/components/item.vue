<template>
  <div class="item">
    <div class="timer">{{second}}</div>
    <div class="title">{{questions[itemNum-1].question}}</div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in questions[itemNum-1].items" v-key="index" @click="choosed(index)" v-bind:key="index"></li>
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
        choosed: null
      }
    },
    created () {
    },
    computed: mapState([
      'itemNum',
      'questions'
    ]),
    methods: {
      ...mapActions([
        'addNum',
        'initial'
      ]),
      next () {

      }
    }   
}
</script>
