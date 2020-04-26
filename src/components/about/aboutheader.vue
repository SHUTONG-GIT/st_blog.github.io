<template>
  <div class="header-box">
    <transition appear enter-active-class="animated fadeInDown">
      <div class="container">
        <div class="container-img">
          <img class="img-pig" src="../../assets/img/favicon.jpg" alt />
        </div>
        <div class="container-name">
          <h1 class="h-name">shu tong</h1>
        </div>
        <div class="container-text">
          <p class="p-text">在校学生，性别男，软件技术专业，主攻web前端，略懂后端</p>
        </div>
        <div class="container-address">
          <span class="el-icon-map-location">江西瑞金</span>
        </div>
      </div>
    </transition>
    <transition appear enter-active-class="animated fadeInUp">
      <div class="main">
        <div class="main-box">
          <p class="main-text">
            写这个博客也是自己一直想独立完成一个完整的项目，用来巩固自己所学到的知识，加强记忆的同时也能更熟练的掌握基本技能。也可以分享一些自己看到的好的文章笔记。之前在学校觉得是忙得抽不出时间，但又感觉自己还是有一些时间的，却没有做出什么成果来，时间总是悄悄流逝，课程？考试？论文？应该也算是自己的一个迷茫期吧！因为疫情被困在家里，也看了很多学习视频，觉得自己应该要着手写个项目了，花费了大概两周多的时间，主要在样式和结构浪费了一些时间吧，也参考了很多博主的结构布局。目前，只实现了一些简单的功能，有很多需要完善的地方，后期会对进行更新。
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header-box {
  .container {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-image: url('../../assets/img/about-img/head.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    .container-img {
      margin-top: 50px;
      width: 100%;
      text-align: center;
      img.img-pig {
        border: 1px solid #fff;
        border-radius: 50%;
      }
    }
    .container-name {
      margin: 15px 0px;
    }
    .container-text {
      padding: 5px;
    }
    .container-address {
      margin: 10px 0px;
      color: darkblue;
      font-size: 13px;
    }
  }
  .main {
    .main-box {
      padding: 10px 80px;
      width: 100%;
      height: 200px;
      line-height: 25px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      background-image: url('../../assets/img/about-img/about-background.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      color: white;
      .main-text {
        text-indent: 2em;
        padding: 0px 15px;
      }
    }
  }
}
</style>
