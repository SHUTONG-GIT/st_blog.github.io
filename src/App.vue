<template>
  <div id="app" class=".app">
    <navigation></navigation>
    <router-view></router-view>
    <backtop></backtop>
  </div>
</template>
<script>
import navigation from './components/nav/navigation '
import backtop from '@/components/home/backtop'
export default {
  name: 'app',
  components: {
    navigation,
    backtop
  }
}
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
  color: black;
}
html,
body,
#app {
  height: 100%;
}
</style>
