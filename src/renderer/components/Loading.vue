<template>
  <transition appear
              enter-active-class="loading-enter-active"
              enter-from-class="loading-enter-from"
              enter-to-class="out-in">
    <div class="init-main">
      <div class="drag-bar"></div>
        <div class="mx-auto">
          <h1 class="mt-36 text-5xl font-bold text-cyan-500">
            Electron Vue Go Tailwind
          </h1>
          <div class="m-4">
            Powered by <div class="inline text-xl">One Studio</div>
          </div>
          <button class="m-4 py-2 px-4 border-2 rounded-xl bg-gray-200" @click="this.$router.push('/home')">进入主页</button>
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
	/*@apply absolute;*/
  @apply w-full h-full;
  border-radius: 10px;
	-webkit-user-select: none;
}
</style>
