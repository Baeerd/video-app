<template>
  <div id="app">
    <nav-bar :title="title" :fixed="true" :safe-area-inset-top="true">
      <template #left>
        <icon name="more-o" size="20" @click="showUserDetail"/>
      </template>
    </nav-bar>

    <router-view/>
    <tabbar v-model="active" :placeholder="true">
      <tabbar-item icon="tv-o" badge="15" to="/video">视频</tabbar-item>
      <tabbar-item icon="newspaper-o" dot to="/exam">考试</tabbar-item>
<!--      <tabbar-item icon="user-o" to="/user" >我的</tabbar-item>-->
    </tabbar>

    <popup v-model="userShow" position="left" :style="{ width:'50%', height: '100%' }">
      <User />
    </popup>

  </div>
</template>

<script>
    import User from '../components/User'
    import { Grid, GridItem  } from 'vant';
    import { NavBar, Tabbar, TabbarItem, Icon, Popup } from 'vant';
export default {
    name: 'App',
    data() {
        return {
            active:0,
            title : '视频',
            userShow : false
        }
    },
    components: {
      User,
      Grid,
      GridItem,
      NavBar,
      Tabbar,
      TabbarItem,
      Icon,
      Popup
    },
    watch:{
      $route: {
          handler:  function (val, oldVal){
              this.title = val.name;
          },
          // 深度观察监听
          deep:  true
      }
    },
    methods: {
        showUserDetail() {
            this.userShow = true;
        }
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
