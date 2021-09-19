<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button class="btn" @click="minimize">最小化窗口</button>
    <button class="btn" @click="maximize">最大化窗口</button>
    <button class="btn" @click="toggleFullscreen()">切换全屏</button>
    <button class="btn" @click="setFullscreen(true)">设置全屏</button>
    <button class="btn" @click="setFullscreen(false)">取消全屏</button>
    <button class="btn" @click="close">关闭</button>
  </div>
</template>

<script>
import * as win from "/src/renderer/ipc/window";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    close() {
      win.close();
    },
    maximize() {
      win.max();
    },
    minimize() {
      win.min();
    },
    toggleFullscreen() {
      win.toggleFullscreen()
    },
    setFullscreen(flag) {
      win.setFullscreen(flag)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  padding: 6px 10px;
  margin: 10px;
  border-radius: 8px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
