<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <!-- <div  @click="initializeGame"  class="flex" >
      <a  href="#1"  class="btn">Initialize</a>
    </div> -->
    <ion-phaser
      v-bind:game.prop='game'
      v-bind:initialize.prop='initialize'
    />
    <div>
      <input type="text">
    </div>
  </div>
</template>

<script>
import Phaser from "phaser";
export default {
  name: 'HelloWorld',
  data() {
    return {
      initialize: false,
      game: {
        width: "100%",
        height: "80%",
        type: Phaser.AUTO,
        scene: {
          preload() {
              this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true); 
          },
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          create() {
            // this.helloWorld = this.add.text(
            //   this.cameras.main.centerX,
            //   this.cameras.main.centerY,
            //   "Hello World",
            //   { font: "40px Arial",  fill: "#ffffff" }
            // );
            // this.helloWorld.setOrigin(0.5);


            var inputText = this.add.rexInputText(100, 500, 200, 60, {
            type: 'textarea',
            text: 'hello world',
            fontSize: '20px',
           })
          },
          // update() {
          //   this.helloWorld.angle += 1;
          // }
        },
        dom: {
           createContainer: true
        }
      }
    };
  },
  props: {
    msg: String
  },
  mounted(){
    this.init()
  },
  methods: {
    init() {
      this.initialize = true;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
