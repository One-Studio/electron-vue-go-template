<template>
  <transition appear
              enter-active-class="loading-enter-active"
              enter-from-class="loading-enter-from"
              enter-to-class="enter-to">
    <div class="init-main hero min-h-screen bg-white rounded-2xl">
      <div class="drag-bar"></div>
      111
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mt-18 mb-4 text-5xl font-bold text-cyan-500">
            CSGO Toolbox
          </h1>
          <div class="mb-3 bg-red-500">
            Powered by <div class="inline text-xl">One Studio</div>
          </div>
          <div>
            加载中
          </div>
        </div>
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
	@apply w-full absolute h-24 rounded-t-2xl grid grid-flow-col grid-cols-6 grid-rows-1 gap-0;
	-webkit-app-region: drag;
	-webkit-user-select: none;
}

.init-main {
	@apply absolute;
	-webkit-user-select: none;
}
</style>
