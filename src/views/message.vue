<template>
  <div class="message-box">
    <msg-head></msg-head>
    <msgform></msgform>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/home/footer'
import msgHead from '../components/message/messageHead'
import msgform from '../components/message/messageForm'

export default {
  data() {
    return {
      uname: '',
      msg: '',
      messagelist: [
        { uname: 'burning pig', msgtime: '2020-04-02', msg: 'sadf' },
        { uname: 'burning pig', msgtime: '2020-04-02', msg: 'sadf' },
        { uname: 'burning pig', msgtime: '2020-04-02', msg: 'sadf' }
      ]
    }
  },
  components: {
    Footer,
    msgHead,
    msgform
  }
}
</script>

<style lang="less" scoped>
.message-box {
  background-color: #f0f2f5;
  height: 100%;
  padding-bottom: 30px;
}
</style>
