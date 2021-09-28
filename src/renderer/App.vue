<template>
  <div class="bg-transparent m-0 h-full w-full" :class="{ 'p-2.5': !this.fullscreenable && this.fullscreen}">
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
    ...mapGetters(['fullscreen', 'fullscreenable']),

  },
  data() {
    return {
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
