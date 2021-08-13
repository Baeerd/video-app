<template>
  <div class="app-container">

    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      个人信息
    </van-divider>

    <field
      v-model="username"
      readonly
      label="用户名"
    />

    <field
      v-model="video"
      readonly
      label="视频"
    />

    <field
      v-model="exam"
      readonly
      label="考试"
    />

    <field
      v-model="score"
      readonly
      label="积分"
    />

  </div>

</template>

<script>
    import { Image as VanImage  } from 'vant';
    import { NavBar, Form, Field, Cell, Divider  } from 'vant';
    export default {
        data() {
            return {
                radio:1,
                result: ['a', 'b'],
                show:false,
                examName:'试卷1',
                username:'admin',
                video:'15',
                exam:'3',
                score:'354',
            }
        },
        components: {
            NavBar,
            Form,
            Field,
            VanImage,
            Cell,
            Divider
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>

