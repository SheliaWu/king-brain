<template>
  <div class="index">
    <router-link to="/question" class="startBtn">点我开始</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'index',
  data(){
    return{
    }
  },
  created(){
    this.initial()
  },
  methods: {
    ...mapActions([
      'addNum',
      'initial'
    ])
  }
}
</script>
<style scoped>
.index{
  width: 100%;
  height: 100%;
  background: url("./../../assets/bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
.startBtn{
  display: block;
  width: 200px;
  height: 60px;
  position: absolute;
  left:calc(50% - 100px);
  bottom: 100px;
  text-decoration: none;
  line-height: 60px;
  background-color: #5438ea;
  font-size: 24px;
  color: #fff;
  border-radius: 10px;
}
</style>


