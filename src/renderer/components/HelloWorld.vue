<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn" @click="sayHello">访问后端</button>
    <button class="btn" @click="minimize">最小化窗口</button>
    <button class="btn" @click="maximize">最大化窗口/复原</button>
    <button class="btn" @click="toggleFullscreen()">切换全屏</button>
    <button class="btn" @click="setFullscreen(true)">设置全屏</button>
    <button class="btn" @click="setFullscreen(false)">取消全屏</button>
    <button class="btn" @click="close">关闭</button>
    <p>为了无边框的窗口阴影，resizable和fullscreenable都关闭了，打开后功能可用</p>
    <p>版本号：{{version}}</p>
    <p>端口号：{{port}}</p>
    <button class="bg-green-100" @click="setVersion('1.114.514')">设置版本号</button>
    <button class="bg-red-100" @click="actSetVersion('hello action!')">action设置版本号</button>
  </div>
</template>

<script>
import * as win from '@/renderer/ipc/window';
// import * as test from '@/renderer/ipc/test';
// import axios from "axios";
// import { useStore } from "vuex";
// const store = useStore();
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      // appVersion: store.state.app.version
    }
  },
  mounted() {
    // this.sayHello()
    // test.test()
  },
  computed: {
    ...mapGetters(['version', 'port'])
  },
  methods: {
    ...mapMutations({
      setVersion: 'SET_VERSION'
    }),
    ...mapActions([
        'actSetVersion'
    ]),
    sayHello() {
      // axios
      //     .get('http://127.0.0.1:12580/hello')
      //     .then(response => {
      //       alert(response.data.version)
      //     })
      //     .catch(error => {
      //       alert(error)
      //     })
    },
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
