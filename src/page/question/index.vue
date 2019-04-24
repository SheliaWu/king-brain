<template>
  <div class="container">
    <item></item>
  </div>
</template>

<script>
import item from '../../components/item'
export default {
  name: 'question',
  components: {
    item
  },
  created () {
    this.$store.commit('START_TIMER')
  }
}
</script>
<style scoped>
.container{
  width:100%;
  height: 100%;
  background:url("../../assets/item2.jpg") no-repeat;
  background-size:cover;
  background-position: center;

}
</style>

