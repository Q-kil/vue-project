<template>
  <div id="app" :style="{ fontSize: postFontSize + 'em' }">
    <SlotTest url="www.baidu.com">
     Your Profile
    </SlotTest>
    <hr>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"  v-on:enlarge-text="postFontSize += 0.1"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SlotTest from '@/components/SlotTest'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SlotTest
  },
  data() {
    return {
      postFontSize: 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
