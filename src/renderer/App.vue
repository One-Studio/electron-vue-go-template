<template>
  <div id="application" :class="{ hasPadding: !fullBorder, hasNoPadding: fullBorder, fullScreen: fullBorder }">
    <div id="window" :class="{ hasShadow: !fullBorder, hasNoShadow: fullBorder, fullScreen: fullBorder }">
      <TitleBar title="electron+vue+go"/>
      <img alt="Vue logo" src="@/renderer/assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <button @click="switchBorder">切换外边框样式</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TitleBar from "./components/TitleBar"

export default {
  name: 'App',
  components: {
    HelloWorld,
    TitleBar
  },
  data() {
    return {
      fullBorder: false,
      system: 'win32',
      fullScreenable: false,
    }
  },
  methods: {
    switchBorder() {
      // this.$id.app.class = 'hasNoPadding'
      this.fullBorder = !this.fullBorder
      console.log(this.fullBorder)
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
  background: transparent;
  margin: 0;
  padding: 2px;
}

/* APP字体等 */
#application {
  margin: 0;
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
