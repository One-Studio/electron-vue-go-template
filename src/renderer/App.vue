<template>
  <div class="bg-transparent m-0 h-full w-full" :class="{ 'p-2.5': !fullBorder}">
<!--    <div class="bg-blue-500 p-0 h-full w-full" >-->
      <router-view class="w-full h-full bg-white bg-opacity-100 border shadow rounded-xl" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {

  },
  computed: {
    ...mapGetters(['version']),

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
    //App挂载后监听IPC消息，并定时向后端发送请求
    this.init()
  },
  methods: {
    ...mapActions([
      'init'
    ]),
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
