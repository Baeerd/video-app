<template>
  <div class="app-container">

        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
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
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>

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
    background-color: #bfc7d3;
  }
  .aaa{
    background-color: #bfc7d3;
  }
</style>

