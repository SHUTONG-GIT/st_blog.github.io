<template>
  <transition appear enter-active-class="animated fadeIn zoomIn">
    <div class="container-mid">
      <div class="container-wel">
        <h1 class="wel-text">Welcome</h1>
      </div>
      <div class="quotes">
        <h3>含泪播种的人一定能含笑收获</h3>
      </div>
      <div class="learn">
        <!-- 绑定跳转到锚点事件 -->
        <span id="learn-point" @click="jump">
          Learn More
          <div class="icon-circle">
            <span class="el-icon-arrow-down"></span>
          </div>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {}
  },
  methods: {
    jump() {
      document.getElementById('article-box').scrollIntoView(true)
    }
  }
}
</script>

<style lang="less" scoped>
.container-mid {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  .container-wel {
    text-align: center;
    .wel-text {
      font-weight: 500;
      font-size: 4.2rem;
      letter-spacing: 0.02em;
      color: #47b1be;
      font-family: inherit;
    }
  }
  .learn {
    font-size: 30px;
    text-align: center;
    height: 60px;
    margin: 25px auto;
    #learn-point {
      color: #47b1be;
      .icon-circle {
        margin: 0px 20px;
        display: inline-block;
        font-size: 30px;
        border: 2px solid;
        width: 50px;
        border-radius: 50%;
        height: 50px;
        line-height: 50px;
      }
    }
    .icon-circle:hover {
      color: #fff;
      background-color: #67c23a;
      border: 2px solid #67c23a;
    }
  }

  .quotes {
    text-align: center;
    h3 {
      color: #47b1be;
    }
  }
}
</style>
