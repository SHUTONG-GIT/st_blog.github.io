<template>
  <div class="links-main" id="links-main">
    <div class="links-box" v-for="item in linkslist" :key="item.id">
      <a :href="item.link">
        <div class="link-content">
          <div class="link-img">
            <img :src="item.img" />
          </div>
          <h3>{{item.name}}</h3>
          <p>{{item.descr}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {
      linkslist: [
        {
          id: 1,
          img: 'https://www.yanshisan.cn/logo.png',
          name: '燕十三',
          descr: '燕十三·一个人的江湖',
          link: 'https://www.yanshisan.cn'
        },
        {
          id: 2,
          img: 'https://www.zhua91.com/favicon.ico',
          name: 'zhua 个人博客',
          descr: '斯人若彩虹，遇上方知有',
          link: 'https://www.zhua91.com'
        },
        {
          id: 3,
          img: 'https://www.tanj.com.cn/public/img/lg.png',
          name: 'TanJia',
          descr: '一个前端程序员的个人博客 | 心之所向，无问西东',
          link: 'https://www.tanj.com.cn/'
        },
        {
          id: 4,
          img: 'http://vectorjzc.top/logo/town.jpg',
          name: 'Vector-Blog',
          descr: '一个跨专业的前端萌新',
          link: 'http://vectorjzc.top'
        },
        {
          id: 5,
          img: 'https://lemonadorable.gitee.io/img/avatar.png',
          name: '自由灵的梦境',
          descr: '愿美梦成真',
          link: 'https://lemona.tk'
        },
        {
          id: 6,
          img: 'https://avatar.wnag.com.cn/gravatar.png',
          name: '可定博客',
          descr: '点进来的，都是各个方面的大佬',
          link: 'https://wnag.com.cn/'
        },
        {
          id: 7,
          img: 'https://cnzknet.com/logo.jpg',
          name: 'Xiaomo blog',
          descr: '等我熬尽一日苦，喂你一口甜',
          link: 'https://moshanghua.net'
        },
        {
          id: 8,
          img: 'https://www.fengchenju.xyz/avatar.png',
          name: '封尘居',
          descr: '愿有前程可奔赴 亦有岁月可回首',
          link: 'https://www.fengchenju.xyz'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll() {
      // 获取浏览器高度
      const clientHeight = $(window).height() || $(document.body).height()
      const scrollObj = $('#links-main')
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
.links-main {
  display: flex;
  justify-content: space-around;
  background-color: #f0f8ffc2;
  flex-wrap: wrap;
  .links-box {
    margin: 10px;
    padding: 15px;
    background: #fff8dcc4;
    border-radius: 10px;
    width: 25%;
    .link-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      color:darkgray h3 {
        margin: 10px;
      }
      p {
        margin: 10px;
        padding: 0px 30px;
        font-size: 14px;
      }
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
  .links-box:hover {
    box-shadow: 5px 5px 10px #ccc;
  }
}
</style>
