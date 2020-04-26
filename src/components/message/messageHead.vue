<template>
  <div class="msgheader">
    <div class="message-head">
      <div class="head-img">
        <img src="../../assets/img/favicon.jpg" />
      </div>
      <h1>欢迎留言</h1>
    </div>
    <div class="head-content">
      <h3>留言板</h3>
      <div class="head-text">
        <p>对于不正当留言，会删除处理。</p>
        <p>欢迎各种留言，技术交流、生活趣事、小说、电影、护肤、以及各种吐槽......</p>
        <p>忌不正当留言，辱骂、不健康、不文明等危险言论。</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.message-head {
  background-image: url('../../assets/img/message-img/msghead.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 300px;
  .head-img {
    text-align: center;
    padding-top: 50px;
    img {
      width: 100px;
      border-radius: 50%;
    }
  }
  h1 {
    text-align: center;
    padding: 15px;
  }
}
.head-content {
    padding: 20px;
    background-color: #fff;
    margin-top: 30px;
    h3 {
      margin: 15px;
    }
    .head-text {
      background-color: #f3f5f9;
      margin-top: 20px;
      padding: 25px;
      font-size: 14px;
      color: #8a89a5;
      line-height: 25px;
      border-left: 4px solid #cbd8f5;
    }
  }
</style>
