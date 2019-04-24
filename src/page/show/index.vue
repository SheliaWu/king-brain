<template>
  <div class="showContainer">
    <div id="wrapper">
      <div class="score">你的得分为：{{score}}</div>
      <div  class="tip">{{tip}}</div>
    </div>
    <img  id="poster" :src="posterSrc" v-if="!hidden"/>
    <div class="save" @click="poster">保存海报</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import html2canvas from  'html2canvas'
import { setTimeout } from 'timers';
export default {
  name: "show",
  data () {
    return {
      'posterSrc':null,
      hidden: true
    }
  },
  computed: mapState([
    'score',
    'tip'
  ]),
  methods:{
    poster(){
      let wrapper  =  document.querySelector('#wrapper')
      let ratial = window.devicePixelRatio
      html2canvas(wrapper).then(canvas => {
        this.posterSrc = canvas.toDataURL("image/png")
        this.hidden = false
        alert("生成成功，请长按保存图片")
      })
    }
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
#wrapper{
  width: 100%;
  height: 100%;
  background: url("../../assets/show.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
#poster{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
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
.save{
  width: 200px;
  height: 60px;
  position: absolute;
  left:calc(50% - 100px);
  bottom: 100px;
  line-height: 60px;
  background-color: #eaae42;
  font-size: 24px;
  color: #fff;
  border-radius: 10px;
}
</style>

