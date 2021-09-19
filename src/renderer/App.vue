<template>
  <div id="app">
    <div id="window">
      <TitleBar title="electron+vue+go"/>
      <img alt="Vue logo" src="@/renderer/assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
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

/* APP字体等 */
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: transparent;
  color: #2c3e50;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  margin: 0;
  padding: 8px;
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
  box-shadow: 0 3px 10px rgba(0,0,0,.12);
}
</style>
