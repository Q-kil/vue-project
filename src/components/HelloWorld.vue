<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-on:click="test">test</div>
    <hr>
    <!-- <div>{{ count }}</div> -->
    <!-- <div>{{ name }}</div> -->
    <!-- <div>{{ countAlias }}</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // computed: mapState({
  //   countAlias: 'count'
  // }),
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   },
  //   name() {
  //     return this.$store.state.name
  //   }
  // },
  // computed: mapState([
  //   'count'
  // ]),
  // computed: {
  //   ...mapState([
  //     'count'
  //   ])
  // },
  methods: {
    test() {
      console.log('test', mapState(['count']));
      // this.$store.commit('increment');
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
