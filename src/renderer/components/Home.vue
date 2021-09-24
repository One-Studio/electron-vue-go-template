<template>
  <div class="w-full h-full bg-white">
    <TitleBar title="electron+vue+go"/>
    <img class="mt-12 mx-auto" alt="Vue logo" src="@/renderer/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "@/renderer/components/HelloWorld";
import TitleBar from "@/renderer/components/TitleBar";

export default {
  name: "Home",
  components: {
    HelloWorld,
    TitleBar,
  }
}
</script>

<style scoped>
root {
}
</style>
