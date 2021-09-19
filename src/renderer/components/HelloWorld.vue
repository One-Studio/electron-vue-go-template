<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button class="btn" @click="minimize">最小化窗口</button>
    <button class="btn" @click="maximize">最大化窗口/复原</button>
    <button class="btn" @click="toggleFullscreen()">切换全屏</button>
    <button class="btn" @click="setFullscreen(true)">设置全屏</button>
    <button class="btn" @click="setFullscreen(false)">取消全屏</button>
    <button class="btn" @click="close">关闭</button>
    <p>为了无边框的窗口阴影，resizable和fullscreenable都关闭了，打开后功能可用</p>
  </div>
</template>

<script>
import * as win from '@/renderer/ipc/window';
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8199/hello')
      .then(response => {
        alert(response.data)
      })
      .catch(error => {
        alert(error)
      })
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
</style>
