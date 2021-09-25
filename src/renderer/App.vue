<template>
  <div class="bg-transparent m-0 h-full w-full" :class="{ 'p-2.5': !fullBorder}">
<!--    <div class="bg-blue-500 p-0 h-full w-full" >-->
      <router-view class="w-full h-full bg-white bg-opacity-100 border shadow-md rounded-xl" />
<!--    </div>-->
    <!--      <button @click="switchBorder">切换外边框样式</button>-->
  </div>
</template>

<script>
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
    //App挂载后监听IPC消息，并定时向后端发送请求
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
.border {
  border-radius: 10px;
  border: 0.5px rgba(0,0,0,0.12) outset;
}

.shadow {
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
}
</style>
