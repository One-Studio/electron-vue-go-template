<template>
  <TitleBar title="electron+vue+go"/>
  <img alt="Vue logo" src="@/renderer/assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
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

</style>
