<template>
  <div id="app">
    <router-view/>
    <tabbar v-model="active" :placeholder="true">
      <tabbar-item icon="home-o" to="/" badge="15">视频</tabbar-item>
      <tabbar-item icon="search" to="/exam" dot>考试</tabbar-item>
    </tabbar>
  </div>
</template>

<script>
    import { Grid, GridItem  } from 'vant';
    import { NavBar, Tabbar, TabbarItem } from 'vant';
export default {
  name: 'App',
    data() {
      return {
        active:0
      }
  },
  components: {
      Grid,
      GridItem,
      NavBar,
      Tabbar,
      TabbarItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
