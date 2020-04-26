<template>
  <div class="about-web" id="about-web">
    <div class="about-title">
      <h1>关于本站</h1>
    </div>
    <div class="myweb">
      <h2>本站结构</h2>
      <div>
        <p>
          前 端 ：HTML + CSS + JavaScript + JQuery + Element-ui 相关小插件
          <br />后 端 ：Node.js + Express + MySql
        </p>
      </div>
      <h2>特别说明</h2>
      <div>
        <p>
          本站文章仅代表个人观点，和任何组织或个人无关。
          <br />本站对主流浏览器均兼容。
          <br />暂时未适配移动端。
          <br />
        </p>
      </div>
      <h2>关于版权</h2>
      <p>
        本站文章大部分为站长归纳整理（归纳整理的文章均会标明出处），若转载本站文章请标明出处。
        <br />只要在使用时注明出处，那么您可以可以对本站内容进行转载、节选、二次创作，但是您不得对其用于商业目的。
        <br />
      </p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    window.addEventListener('scroll', this.aboutScroll, true)
  },
  beforeDestroy() {
    // 离开该页面后销毁监听事件
    // console.log('触发销毁监听事件')
    window.removeEventListener('scroll', this.aboutScroll, true)
  },
  methods: {
    aboutScroll: function() {
      // 获取浏览器高度
      const clientHeight = $(window).height() || $(document.body).height()
      const scrollObj = $('#about-web')
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
.about-web {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 85px 10px 30px;
  margin: 20px 0px;
  .about-title {
    margin: 20px 0px;
    border-bottom: 1px solid #ccc;
  }
  h1 {
    margin: 20px 0px;
    padding: 0px 20px;
    border-left: 2px solid #03a9f4;
  }
  .myweb {
    background: white;
    padding: 50px 30px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px 10px #cccccc;
  }
  h2 {
    font-size: 14px;
    margin: 20px 0;
  }
  p {
    font-size: 13px;
    color: #666;
    line-height: 21px;
  }
}
</style>
