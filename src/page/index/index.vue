<template>
  <div class="index">
    <router-link to="/question" class="startBtn">Start</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return{
    }
  },
  created(){
  }
}
</script>
<style scoped>
.index{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.startBtn{
  display: block;
  width: 120px;
  height: 40px;
  position: absolute;
  left:calc(50% - 60px);
  bottom: 100px;
  text-decoration: none;
  line-height: 40px;
}
</style>


