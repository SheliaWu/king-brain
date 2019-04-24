<template>
  <div class="showContainer">
    <div class="score">你的得分为：{{score}}</div>
    <div  class="tip">{{tip}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "show",
  data () {
    return {
    }
  },
  computed: mapState([
    'score',
    'tip'
  ]),
  created(){
    console.log(this.$store.state)
  }
}
</script>
<style scoped>
.showContainer{
  width: 100%;
  height: 100%;
  background: url("../../assets/show.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  color:#fff;
  font-size: 1rem;
}
.score{
  position: absolute;
  top:7.7rem;
  left: 50%;
  transform: translate(-50%, 0);
}
.tip{
  width: 80%;
  color: #eaae42;
  font-size: 1.2rem;
  text-align: center;
  position: absolute;
  top:44%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>

