<template>
  <div class="drag-bar">
    <!--		<div class="drag-right">-->
    <!--			<div></div>-->
    <!--    <div style="" />-->
    <div class="title-content" style="">{{ title }}</div>
    <!--			<div class="traffic-light">-->
    <div style="position: absolute; right: 0">
      <button @click="minimize" class="bg-green-500 traffic-btn hover:inner-shadow" style="background-color: rgb(16, 185, 129)"></button>
      <button @click="maximize" class="bg-yellow-500 traffic-btn" style="background-color: rgb(245, 158, 11)"></button>
      <button @click="close" class="bg-red-500 traffic-btn" style="background-color: rgb(239, 68, 68)"></button>
    </div>
    <!--			</div>-->
    <!--		</div>-->
  </div>
</template>

<script>
import * as win from '@/renderer/ipc/window';

export default {
  name: "TitleBar",
  props: {
    title: String,
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
  },
};
</script>

<style scoped>
.drag-bar {
  /*@apply w-full h-8 p-0 m-0 flex justify-between items-center text-center;*/
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* grid grid-flow-col grid-cols-6 grid-rows-1 gap-0 rounded-t-lg */
  -webkit-app-region: drag;
  -webkit-user-select: none;
  background: rgba(254, 254, 254, 0.9);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px 12px 0 0;
}

/*.drag-left {*/
/*	@apply col-span-1 bg-transparent;*/
/*	border-radius: 12px 0 0 0;*/

/*}*/

/*.drag-right {*/
/*	@apply col-span-5 text-center rounded-tr-lg grid grid-flow-col grid-cols-3 grid-rows-1 gap-0;*/
/*	border-radius:  0 12px 0 0;*/
/*	background-color: rgba(254, 254, 254, 0.9);*/
/*	backdrop-filter: blur(8px);*/
/*	!*border-bottom: 1px solid rgba(210, 210, 210, 0.4);*!*/
/*	-webkit-app-region: drag;*/
/*	-webkit-user-select: none;*/
/*	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);*/
/*}*/

.title-content {
  /*@apply z-30 m-auto tracking-wider;*/
  margin: auto;
  padding-left: 0.5rem;
  clear: both;
}

/*.traffic-light {*/
/*	@apply my-auto mr-2 flex flex-row-reverse;*/
/*	!*z-index: 100;*!*/
/*	!*-webkit-app-region: no-drag;*!*/
/*	!*-webkit-user-select: auto;*!*/
/*}*/

.traffic-btn {
  /*@apply my-auto mr-2 shadow-inner outline-none focus-within:outline-none w-3.5 h-3.5 rounded-full border border-black border-opacity-70;*/
  width: 14px;
  height: 14px;
  margin-right: .5rem;
  border: 1px inset rgba(0, 0, 0,.7);
  border-radius: 50%;
  -webkit-app-region: no-drag;
  -webkit-user-select: auto;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.2);
  /*transition: width ease-in-out 300ms;*/
  /*transition: all ease-in-out 1000ms;*/
  /*transform: translate3d(0,0,0)*/
  /*-webkit-transform-style: preserve-3d;*/
  /*-webkit-backface-visibility: hidden;*/
  /*-moz-backface-visibility: hidden;*/
  /*-ms-backface-visibility: hidden;*/
}

.traffic-btn:hover {
  transition-duration: 200ms;
  transform: scale(1.08);
  /*width: 16px;*/
  /*height: 16px;*/
}
</style>
