<template>
  <div class="page-box">
    <div class="page1" id="page1">
      <div class="warp-box">
        <div class="warp">
          <div class="links">
            <router-link to="/about">关于</router-link>
          </div>
          <div class="links">
            <router-link to="/friend">+友情链接</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="page2" id="page2">
      <div class="warp-box">
        <div class="inner">
          <h1 class="inner-title" id="inner-title">前端小白</h1>
          <p class="inner-content" id="inner-content">爱好羽毛球、电影，喜欢全心投入，心无旁骛，认真上进的感觉，正在学习和成长中。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', this.pageScroll, true)
  },
  beforeDestroy() {
    // 离开该页面后销毁监听事件
    // console.log('触发销毁监听事件')
    window.removeEventListener('scroll', this.pageScroll, true)
  },
  methods: {
    pageScroll: function() {
      // 获取浏览器高度
      const clientHeight = $(window).height() || $(document.body).height()
      const scrollObj1 = $('#page1')
      const scrollObj2 = $('#page2')
      //   console.log(scrollObj)

      // 获取元素到顶部的距离
      const scrollTop1 = scrollObj1.offset().top
      const scrollTop2 = scrollObj2.offset().top
      // 获取滚动条滚动距离
      const scrollHeight = $(window).scrollTop()
      // console.log(scrollHeight)
      const scrollMove1 = scrollTop1 - clientHeight
      const scrollMove2 = scrollTop2 - clientHeight + 50
      if (scrollHeight > scrollMove1) {
        scrollObj1.addClass('animated fadeInUp')
      }
      if (scrollHeight > scrollMove2) {
        scrollObj2.addClass('animated fadeInUp')
        $('#inner-title').addClass('animated fadeInLeft')
        $('#inner-content').addClass('animated fadeInRight')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page1 {
  width: 100%;
  background-image: url('../../assets/img/home-img/home-page.jpg');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  .warp-box {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    .warp {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .links {
      position: relative;
      width: 15%;
      height: 25px;
      line-height: 25px;
      text-align: center;
      padding: 10px;
      background-color: #ffffff00;
      border: 1px solid white;
      margin: 0px 10px;
      overflow: hidden;
      white-space: nowrap;
      a {
        color: white;
      }
    }
    .links:before {
      visibility: hidden;
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 0;
      height: 100%;
      background: #67c23a;
      z-index: -1;
      transform: skew(45deg, 0);
      transition: all 0.35s;
    }
    .links:hover:before {
      visibility: visible;
      width: 150%;
      left: -25%;
    }
  }
}
.page2 {
  .warp-box {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      margin: 15px 0px;
    }
  }
}
</style>
