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
	position: absolute;
  width:100%;
  height: 100%;
	top: 0px;
	left: 0px;
  background-color: peachpuff;
}
</style>

