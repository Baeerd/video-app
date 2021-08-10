<template>
  <div id="app">
    <nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </nav-bar>
    <router-view/>
    <tabbar v-model="active">
      <tabbar-item icon="home-o" to="/" dot>视频</tabbar-item>
      <tabbar-item icon="search" to="/exam" badge="5">考试</tabbar-item>
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
