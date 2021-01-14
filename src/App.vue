<template>
  <div id="app">
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
  // 初始化与绑定监听事件方法
 	scrollInit() {
 	  // 获取要绑定事件的元素
      const scrollDiv = document.getElementById("nav");
      // document.addEventListener('DOMMouseScroll', handler, false)
      // 添加滚轮滚动监听事件，一般是用下面的方法，上面的是火狐的写法
      scrollDiv.addEventListener('mousewheel', handler, false)
      // 滚动事件的出来函数
      function handler(event) {
        // 获取滚动方向
        const detail = event.wheelDelta || event.detail;
        // 定义滚动方向，其实也可以在赋值的时候写
        const moveForwardStep = 1;
        const moveBackStep = -1;
        // 定义滚动距离
        let step = 0;
        // 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
        if (detail < 0) {
          step = moveForwardStep * 100;
        } else {
          step = moveBackStep * 100;
        }
        // 对需要滚动的元素进行滚动操作
        scrollDiv.scrollLeft += step;
      }
    }
  },
  mounted() {
  	// 调用初始化方法，这里一定是在DOM加载之后调用
    this.scrollInit()
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
.container {
      height: 100px;
      overflow-x: auto;
      white-space: nowrap;
      /* overflow-x: auto; */
      /* display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; */
  /* display: flex;
    align-items: center;
    overflow-y: hidden;
    flex-wrap: nowrap; */
    }
    .item {
      display: inline-block;
      width: 96px;
      height: 94px;
      background: #ff0000;
      border: 1px solid #448aff;
    }
</style>
