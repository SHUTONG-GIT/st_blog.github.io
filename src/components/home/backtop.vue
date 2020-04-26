<template>
  <div class="backTop" v-show="toggle" @click="totop">
    <span class="el-icon-arrow-up"></span>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      toggle: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.goBackScroll, true)
  },
  beforeDestroy() {
    // 离开该页面后销毁监听事件
    // console.log('触发销毁监听事件')
    window.removeEventListener('scroll', this.goBackScroll, true)
  },
  methods: {
    goBackScroll() {
      const scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 30 ? (this.toggle = true) : (this.toggle = false)
    },
    totop() {
      var top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>

<style lang="less" scoped>
.backTop {
  position: fixed;
  bottom: 25px;
  right: 90px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #ccc;
  span.el-icon-arrow-up {
    padding: 5px;
    font-size: 25px;
  }
}
.backTop:hover {
  cursor: pointer;
  color: white;
  background-color: #67c23a;
  border: 1px solid #67c23a;
}
</style>
