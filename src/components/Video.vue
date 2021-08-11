<template>
  <div class="app-container">
    <nav-bar title="视频" fixed="true" safe-area-inset-top="true"></nav-bar>
    <cell value="视频标题:" icon="location-o" />
        <video-player  class="video-player vjs-custom-skin" style="margin-bottom: 20px;" ref="videoPlayer" :playsinline="true"
                       :options="playerOptions"></video-player>

    <div>
      <cell value="视频列表:" icon="location-o" />

      <grid :column-num="2" >
        <grid-item v-for="value in 15" :key="value" icon="photo-o" :text="value" dot />
      </grid>
    </div>

  </div>

</template>

<script>
    import { videoPlayer } from 'vue-video-player'
    import 'video.js/dist/video-js.css'
    import { NavBar, Grid, GridItem, Cell } from 'vant';
    export default {
        data() {
            return {
                paused: true,
                learningDuration: {
                    id: '',
                    userId: '',
                    type: '0',
                    examinationId: '',
                    finishFlag: '0',
                    durations: ''
                },
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                    autoplay: false, // 如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        // src: '../../static/video/test.mp4', // 路径
                        // src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        src: require('../assets/video.mp4'),
                        // src: './video.mp4'
                        type: 'video/mp4' // 类型
                    }],
                    poster: require('../assets/logo.png'), // 你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true // 全屏按钮
                    }
                }
            }
        },
        components: {
            videoPlayer,
            NavBar,
            Grid,
            GridItem,
            Cell
        },
        methods: {

        }
    }
</script>
<style scoped>

</style>

