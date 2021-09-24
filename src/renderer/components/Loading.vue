<template>
  <transition appear
              enter-active-class="loading-enter-active"
              enter-from-class="loading-enter-from"
              enter-to-class="enter-to">
    <div class="init-main hero min-h-screen bg-white rounded-2xl">
      <div class="drag-bar"></div>
        <div class="mx-auto">
          <h1 class="mt-44 mb-4 text-5xl font-bold text-cyan-500">
            CSGO Toolbox
          </h1>
          <div class="mb-3">
            Powered by <div class="inline text-xl">One Studio</div>
          </div>
          <div>
            加载中
          </div>
          <button @click="this.$router.push('/home')">进入主页</button>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
	name: "Loading.vue"
}
</script>

<style scoped>
.drag-bar {
	@apply w-full h-24 grid grid-flow-col grid-cols-6 grid-rows-1 gap-0;
  border-radius: 10px 10px 0 0;
	-webkit-app-region: drag;
	-webkit-user-select: none;
}

.init-main {
	@apply absolute;
	-webkit-user-select: none;
}
</style>
