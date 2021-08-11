<template>
  <div class="app-container">
    <nav-bar title="考试" fixed="true" safe-area-inset-top="true" ></nav-bar>

    <cell title="试卷列表:" icon="location-o" :value="examName" is-link @click="showPopup()"/>

    <popup v-model="show"
           round
           closeable
           close-icon="close"
           position="bottom"
           :style="{ height: '30%' }" >

      <cell title="标题" />
      <cell title="试卷名称1" is-link value="选择" @click="checkExam(1)"/>
      <cell title="试卷名称2" is-link value="选择" @click="checkExam(2)"/>
      <cell title="试卷名称3" is-link value="选择" @click="checkExam(3)"/>

    </popup>

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
    import { NavBar, Grid, GridItem, RadioGroup, Radio, Checkbox, CheckboxGroup, Tabbar, TabbarItem, Button, Dialog, Cell, Popup  } from 'vant';
    export default {
        data() {
            return {
                radio:1,
                result: ['a', 'b'],
                show:false,
                examName:'试卷1'
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
            Dialog,
            Cell,
            Popup
        },
        methods: {
          showPopup() {
              this.show = true;
          },
          checkExam(examIndex) {
              this.examName = '试卷'+examIndex;
              this.show = false;
          },
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

