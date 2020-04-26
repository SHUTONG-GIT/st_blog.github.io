<template>
  <div class="foot-box" id="foot-box">
    <div class="foot-top">
      <div class="top-left">
        <div class="about-logo">
          <img class="logo-img" src="../../assets/img/favicon.jpg" />
        </div>
        <p class="left-text">精诚所至，金石为开</p>
        <router-link to="/about">
          <div class="left-btn">About Me</div>
        </router-link>
      </div>
      <div class="top-middle">
        <div class="middle-title">
          <h4>相关链接</h4>
        </div>
        <div class="middle-list">
          <ul>
            <li>
              <router-link to="/home">首页</router-link>
            </li>
            <li>
              <router-link to="/article">文章</router-link>
            </li>
            <li>
              <router-link to="/message">留言</router-link>
            </li>
            <li>
              <router-link to="/friend">友链</router-link>
            </li>
            <li>
              <router-link to="/about">关于</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="top-right">
        <div class="contact-title">
          <h4>联系我</h4>
        </div>
        <div class="contact-list">
          <ul>
            <li>地址：江西省吉安市</li>
            <li>QQ：2952180170</li>
            <li>邮箱：2952180170@qq.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <div class="copyright">
        <p class="cr-text">Copyright © 2020 burning-pig All Rights Reserved V.1.0.0</p>
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
    window.addEventListener('scroll', this.footerScroll, true)
  },
  beforeDestroy() {
    // 离开该页面后销毁监听事件
    // console.log('触发销毁监听事件')
    window.removeEventListener('scroll', this.footerScroll, true)
  },
  methods: {
    footerScroll: function() {
      // 获取浏览器高度
      const clientHeight = $(window).height() || $(document.body).height()
      const scrollObj = $('#foot-box')
      //   console.log(scrollObj)

      // 获取元素到顶部的距离
      const scrollTop = scrollObj.offset().top
      // 获取滚动条滚动距离
      const scrollHeight = $(window).scrollTop()
      // console.log(scrollHeight)
      const scrollMove = scrollTop - clientHeight
      if (scrollHeight > scrollMove) {
        scrollObj.addClass('animated fadeInUp')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.foot-box {
  position: relative;
  display: flex;
  flex-direction: column;
  .foot-top {
    display: flex;
    justify-content: space-around;
    background-color: #9492e1cf;
    flex-wrap: wrap;
    .top-left {
      padding: 15px;
      .about-logo {
        text-align: center;
        margin: 10px 0px;
        img.logo-img {
          width: 45px;
          border: 1px solid #9492e1cf;
          border-radius: 50%;
        }
      }
      p.left-text {
        margin: 10px 0px;
        text-align: center;
      }
      .left-btn {
        width: 100px;
        text-align: center;
        padding: 10px 12px;
        border: 1px solid #d0cde4;
        background-color: #d0cde4;
        border-radius: 5px;
        margin: 10px auto;
      }
    }
    .top-middle {
      padding: 15px;
      .middle-title {
        text-align: center;
        margin: 10px auto;
      }
      .middle-list li {
        float: left;
        width: 50%;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        list-style: none;
      }
    }
    .top-right {
      padding: 15px;
      .contact-title {
        text-align: center;
        padding: 10px;
      }
      .contact-list {
        li {
          display: block;
          margin: 0px auto;
          padding: 10px;
          box-sizing: border-box;
          list-style: none;
        }
      }
    }
  }
  .foot-bottom {
    background-color: #919bdc;
    padding: 15px;
    .copyright {
      text-align: center;
    }
  }
}
</style>
