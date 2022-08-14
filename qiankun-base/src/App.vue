<template>
  <a href="/micro-app1">micro-app1</a> | 
  <a href="/micro-app2">micro-app2</a>
  
  <div id="micro-app1"></div>
  <div id="micro-app2"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
})
export default class App extends Vue {}
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
