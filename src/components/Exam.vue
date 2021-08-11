<template>
  <div class="app-container">
    <nav-bar title="考试" fixed="true" safe-area-inset-top="true" ></nav-bar>
    <grid :border="false" :column-num="1">
      <grid-item>
        1啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <radio-group v-model="radio" icon-size="15px">
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
          <radio name="3">单选框 3</radio>
          <radio name="4">单选框 4</radio>
        </radio-group>
      </grid-item>

      <grid-item >
        2啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <checkbox-group v-model="result" icon-size="15px">
          <checkbox name="a" shape="square">复选框 a</checkbox>
          <checkbox name="b" shape="square">复选框 b</checkbox>
          <checkbox name="c" shape="square">复选框 c</checkbox>
          <checkbox name="d" shape="square">复选框 d</checkbox>
        </checkbox-group>
      </grid-item>

      <grid-item >
        3啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <radio-group v-model="radio" icon-size="15px">
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
          <radio name="3">单选框 3</radio>
          <radio name="4">单选框 4</radio>
        </radio-group>
      </grid-item>

      <grid-item >
        4啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <radio-group v-model="radio" icon-size="15px">
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
          <radio name="3">单选框 3</radio>
          <radio name="4">单选框 4</radio>
        </radio-group>
      </grid-item>

      <grid-item >
        5啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <radio-group v-model="radio" icon-size="15px">
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
          <radio name="3">单选框 3</radio>
          <radio name="4">单选框 4</radio>
        </radio-group>
      </grid-item>

      <grid-item >
        6啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        <radio-group v-model="radio" icon-size="15px">
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
          <radio name="3">单选框 3</radio>
          <radio name="4">单选框 4</radio>
        </radio-group>
      </grid-item>

    </grid>

    <van-button round type="info" @click="submitExam()">提交</van-button>

  </div>

</template>

<script>
    import { NavBar, Grid, GridItem, RadioGroup, Radio, Checkbox, CheckboxGroup, Tabbar, TabbarItem, Button, Dialog  } from 'vant';
    export default {
        data() {
            return {
                radio:1,
                result: ['a', 'b']
            }
        },
        components: {
            NavBar,
            Grid,
            GridItem,
            RadioGroup,
            Radio,
            Checkbox,
            CheckboxGroup,
            Tabbar,
            TabbarItem,
            VanButton:Button,
            Dialog
        },
        methods: {
          submitExam() {
              Dialog.confirm({
                  title: '提交',
                  message: '是否确认提交',
              })
              .then(() => {
                  // on confirm
              })
              .catch(() => {
                  // on cancel
              });
          }
        }
    }
</script>

<style scoped>
  .afterCheck{
    background-color: #bfc7d3;
  }
</style>

