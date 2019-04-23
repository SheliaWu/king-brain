<template>
  <div class="showContainer">
    你的分数是：{{score}}
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
    'score'
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
}
</style>

