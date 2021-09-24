<template>
  <div id="application" :class="{ hasPadding: !fullBorder, hasNoPadding: fullBorder, fullScreen: fullBorder }">
    <div id="window" :class="{ hasShadow: !fullBorder, hasNoShadow: fullBorder, fullScreen: fullBorder }">
      <router-view class="" />
<!--      <button @click="switchBorder">切换外边框样式</button>-->
    </div>
  </div>
</template>

<script>
//class="absolute" style="z-index: 30" :style="`opacity: ${mainOpacity}`"
export default {
  name: 'App',
  components: {
  },
  computed: {

  },
  data() {
    return {
      fullBorder: false,
      system: 'win32',
      fullScreenable: false,
      loading: true,
      opacity: 1,
      mainOpacity: 1,
      inited: true,
    }
  },
  mounted() {
    // if(this.inited) {
    //   setTimeout(()=>{
    //     this.mainOpacity = 1
    //   }, 950)
    //   setTimeout(()=>{
    //     this.opacity = 0
    //   }, 1000)
    //   setTimeout(()=>{
    //     this.loading = false
    //   }, 1700)
    // }
  },
  methods: {
    switchBorder() {
      // this.$id.app.class = 'hasNoPadding'
      this.fullBorder = !this.fullBorder
      console.log(this.fullBorder)
    },
    toHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
/* 占满全部空间 */
html, body {
  background: transparent;
  /*background: blue;*/
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  /*padding: 10px;*/
}

/* 隐藏滚动条 */
body::-webkit-scrollbar {
  display: none;
}

/*@font-face {*/
/*  font-family: 'Roboto';*/
/*  src: url('/assets/fonts/roboto/roboto-v18-latin-regular.ttf');*/
/*  font-weight: normal;*/
/*  font-style: normal;*/
/*}*/

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  /*width: 100%;*/
  /*height: 100%;*/
  background: transparent;
  margin: 0;
  padding: 0;
}

/* APP字体等 */
#application {
  margin: 0;
  width: 100%;
  height: 100%;
}

/* 与App区分，不然会有两个边框 */
#window {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: rgba(251, 251, 251, .985);
  border-radius: 10px;
  border: 0.5px rgba(0,0,0,0.12) outset;
}

.hasPadding {
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  padding: 6px;
}

.hasNoPadding {
  width: 100%;
  height: 100%;
  padding: 0;
}

.hasShadow {
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
}

.hasNoShadow {

}

.fullScreen {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 0 !important;
}
</style>
