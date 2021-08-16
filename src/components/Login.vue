<template>
  <div class="app-container">

    <div class="logo">
      <van-image
        width="100"
        height="100"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
        <h1 class="press"> xxxxxxx系统 </h1>
    </div>

    <div class="form">
      <van-grid :column-num="1" gutter="5" >
        <van-grid-item >
          <van-form @submit="onSubmit" >
            <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
          </van-form>
        </van-grid-item>
      </van-grid>
    </div>

  </div>

</template>

<script>
    import { Image as VanImage } from 'vant';
    import { Form, Field, Button, Grid, GridItem } from 'vant';

    export default {
        data() {
            return {
                username: 'admin',
                password: '123456'
            };
        },
        components: {
            vanForm:Form,
            vanField:Field,
            vanButton:Button,
            vanGrid:Grid,
            vanGridItem:GridItem,
            VanImage
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);
                this.$router.push("/video");
            }
        }
    }
</script>

<style scoped>
  .app-container {
    background-color: #ffffff;
  }
  .logo{
    position:relative;
    top: 100px
  }
  .form{
    position:relative;
    top: 200px;
  }
  .vintage{
    background: #EEE url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAHklEQVQImWNkYGBgYGD4//8/A5wF5SBYyAr+//8PAPOCFO0Q2zq7AAAAAElFTkSuQmCC) repeat;
    text-shadow: 5px -5px black, 4px -4px white;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text
  }
  .stroke{
    color: transparent;
    -webkit-text-stroke: 1px black;
    letter-spacing: 0.04em;
  }
  .press {
    color: transparent;
    background-color : black;
    text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
    -webkit-background-clip : text;
  }
  .threed{
    color: #fafafa;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 }
</style>

