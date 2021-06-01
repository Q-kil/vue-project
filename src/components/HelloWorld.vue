<template>
  <div class="hello">
    <div>HelloWorld</div>
    <div id="game"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    const launcher = tooqing.Launcher;
      const gameOption = {
        api_root: 'https://api-dev.tooqing.com/',
        osd: 'https://osd-alpha.tooqing.com/',
        width: window.innerWidth || window.document.documentElement.clientWidth,
        height: screen.height,
        // auth_token: getToken().accessToken,
        // token_expire: getToken().expire, //过期时间
        // token_fingerprint: getToken().fingerprint, //指纹验证
        // user_id: user_id,
        game_id: '5e719a0a68196e416ecf7aad', // 游戏
        virtual_world_id: '0',
        parent: 'game',
        config_root: 'https://a.tooqing.com/',
        platform: 'app',
        gameLoaded() {
          console.log('gameloaded');
          self.loadingStatus = false;
        }
      };

      window.$game = launcher.start(gameOption);
      console.log('gameOption', gameOption);
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
