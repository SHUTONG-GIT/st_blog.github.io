<template>
  <div class="article-box" id="article-box">
    <!-- <transition appear enter-active-class=""> -->
    <div id="art-header">
      <h2 class="art-title">推荐文章</h2>
      <div class="bottomline"></div>
      <p class="art-text">这里有文章、相关资源下载以及关于我在开发中遇到的一些问题解决方法。前端新手，用来练手，不好的地方可以在留言区给出您宝贵的建议哦！</p>
    </div>
    <!-- </transition> -->
    <div id="article-content">
      <articlelist v-for="item in artlist" :key="item.id">
        <img class="artimg" slot="img" :src="item.src" />
        <h4 slot="htitle">{{item.title}}</h4>
        <p slot="artmain">{{item.main}}</p>
        <a :href="item.link" slot="art-link">前往阅读</a>
      </articlelist>
    </div>
    <div class="art-more">
      <router-link to="/article">更多 ></router-link>
    </div>
  </div>
</template>

<script>
import articlelist from '@/components/home/articlelist'
import $ from 'jquery'

export default {
  name: 'hotArtivle',
  data() {
    return {
      artlist: [
        {
          id: '0',
          src: require('../../assets/img/home-img/item-1.jpg'),
          title: 'JavaScript开发者应懂的33个概念',
          main:
            '这个项目是为了帮助开发者掌握 JavaScript 概念而创立的。它不是必备，但在未来学习（JavaScript）中，可以作为一篇指南。本篇文章是参照 @leonardomso 创立， 由于原版资源都要翻墙，所以本人创立一个中文版，附上关于这些概念在国内的一些文章和视频。 若有觉得更好的文章或者视频，可以贡献出来，觉得有误的，请联系我删除。',
          link: 'https://github.com/stephentian/33-js-concepts'
        },
        {
          id: '1',
          src: require('../../assets/img/home-img/item-2.jpg'),
          title: '12 种使用 Vue 的最佳做法',
          main:
            '随着 VueJS 的使用越来越广泛，出现了几种最佳实践并逐渐成为标准。在本文中，主要分享在平时开发中一些有用资源和技巧,这是12个最常见的最佳实践，它们将使我们的Vue代码更易于维护、可读性更好、更专业。希望这些技巧对您有用。',
          link: 'https://juejin.im/post/5e6ec31351882549432007be#heading-12'
        },
        {
          id: '2',
          src: require('../../assets/img/home-img/item-4.jpg'),
          title: 'CSS 常用技巧',
          main:
            '相信大家在写css属性的时候，会遇到一些问题，比如说：垂直对齐，垂直居中，背景渐变动画，表格宽度自适应，模糊文本，样式重置，清除浮动，通用媒体查询，自定义选择文本，强制出现滚动条，固定头部和页脚，自己在网上看到的一篇关于css的文章，感觉这里边一些常用的css代码片段对大家很有帮助，所以我就把这篇文章分享给大家，希望大家能够喜欢。',
          link: 'https://juejin.im/post/5dafb263f265da5b9b80244d'
        }
      ]
    }
  },
  components: {
    articlelist
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  beforeDestroy() {
    // 离开该页面后销毁监听事件
    // console.log('触发销毁监听事件')
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll: function() {
      // 获取浏览器高度
      const clientHeight = $(window).height() || $(document.body).height()
      const scrollObj1 = $('#art-header')
      const scrollObj2 = $('#article-content')
      // console.log(scrollObj1)

      // 获取元素到顶部的距离
      const scrollTop1 = scrollObj1.offset().top
      const scrollTop2 = scrollObj2.offset().top

      // console.log(scrollTop2)
      // 获取滚动条滚动距离
      const scrollHeight = $(window).scrollTop()
      // console.log(scrollHeight)
      const scrollMove1 = scrollTop1 - clientHeight
      const scrollMove2 = scrollTop2 - clientHeight
      // console.log(scrollMove2)
      if (scrollHeight > scrollMove1) {
        scrollObj1.addClass('animated fadeInDown')
      }
      if (scrollHeight > scrollMove2) {
        scrollObj2.addClass('animated fadeInUp')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-box {
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .art-img {
    width: 600px;
  }
  #art-header {
    text-align: center;
    .art-text {
      width: 45%;
      margin: 0px auto;
      margin-top: 20px;
      line-height: 22px;
      color: #888;
    }
    .art-title {
      font-size: 32px;
      padding-bottom: 30px;
      font-weight: 500;
    }
    .bottomline {
      width: 60px;
      height: 2px;
      background-color: #2196f3;
      margin: 0px auto;
    }
  }
  #article-content {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .art-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 15px;
      background-color: #f1f1e9;
      width: 30%;
      img.artimg {
        width: 100%;
      }
      h4 {
        text-align: center;
        margin: 10px 0px;
      }
      p {
        text-align: center;
        height: 65px;
        color: #888;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      a {
        display: inline-block;
        margin: 15px;
        color: #2196f3;
      }
      a:hover {
        color: black;
      }
    }
  }
  .art-more {
    padding: 10px 50px;
    margin: 15px;
    border: 1px solid #accaaa;
    a {
      color: #accaaa;
    }
  }
}
</style>
