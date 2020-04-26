<template>
  <div class="links-content">
    <div class="link-head">
      <div class="head-img">
        <img src="../../assets/img/favicon.jpg" />
      </div>
      <p>含泪播种的人一定能含笑收获</p>
    </div>
    <div class="friend-container">
      <transition appear enter-active-class="animated zoomIn fadeIn">
        <div class="container-inner">
          <h2>友链申请</h2>
          <p>本站欢迎交换友链，如需交换链接请在留言板留言，博主不定期对友链进行互动访问。</p>
          <h3>申请格式</h3>
          <p>名称：burning-pig个人博客</p>
          <p>网址：http://www.xxxxx.com</p>
          <p>图标：http://www.xxxxx.com/xxx.jpg</p>
          <p>描述：以诚感人者，人亦诚而应</p>
          <p>申请提交后若本人未接收到,如超过24小时还未添加,请私信我</p>
          <h3>申请要求</h3>
          <p>原创内容优先，技术类生活类优先，博客稳定运行、内容稳定更新优先。</p>
          <p>内容必须符合中华人民共和国法律法规；慎谈政治和时事；不得和灰产、暴力、色情搭边；</p>
          <p>希望你也是一个有趣之人，不是刻意为了弄知名度、商业目的而换友链，而是本着技术交流、感情交流的朋友关系。</p>
          <h2>The End</h2>
        </div>
      </transition>
      <link-list></link-list>
    </div>
  </div>
</template>

<script>
import linkList from '@/components/friend/friendLinks'
export default {
  components: {
    linkList
  }
}
</script>

<style lang="less" scoped>
.link-head {
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/img/friend-img/friendhead.jpg');
  background-size: 100% 100%;
  color: azure;
  .head-img {
    text-align: center;
    padding-top: 50px;
    img {
      width: 100px;
      border-radius: 50%;
    }
  }
}
.friend-container {
  background-image: url('../../assets/img/friend-img/firend-bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  color: #382991;
  .container-inner {
    background-color: #f0f8ffc2;
    padding: 30px;
    h2 {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #aaa;
    }
    h3 {
      margin: 10px;
    }
    p {
      margin: 10px;
      padding: 0px 30px;
      font-size: 14px;
    }
  }
}
</style>
