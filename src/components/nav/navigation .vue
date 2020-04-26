<template>
  <div class="navbox">
    <transition>
      <div class="navigation" v-show="isnavshow">
        <div class="seat"></div>
        <div class="nav-list" v-for="item in navlists" :key="item.id">
          <router-link :to="item.linkto">
            <navlist class="linkbtn">
              <span slot="icon" :class="item.icon"></span>
              <span slot="text">{{item.text}}</span>
            </navlist>
          </router-link>
        </div>
      </div>
    </transition>
    <div class="toggle" @click="toggleshow">
      <el-button type="success" circle id="navbtn">
        <transition>
          <span class="el-icon-s-fold" v-show="!isnavshow"></span>
        </transition>
        <transition>
          <span class="el-icon-close" v-show="isnavshow"></span>
        </transition>
      </el-button>
    </div>
  </div>
</template>

<script>
import navlist from './navlist'

export default {
  name: 'navigation',
  data() {
    return {
      isnavshow: false,
      navlists: [
        {
          id: 0,
          linkto: '/home',
          icon: 'el-icon-s-home',
          text: '首页'
        },
        {
          id: 1,
          linkto: '/article',
          icon: 'el-icon-tickets',
          text: '文章'
        },
        {
          id: 2,
          linkto: '/about',
          icon: 'el-icon-s-opportunity',
          text: '关于'
        },
        {
          id: 3,
          linkto: '/friend',
          icon: 'el-icon-paperclip',
          text: '友链'
        },
        {
          id: 4,
          linkto: '/message',
          icon: 'el-icon-chat-dot-square',
          text: '留言'
        }
      ]
    }
  },
  components: {
    navlist
  },
  methods: {
    toggleshow() {
      this.isnavshow = !this.isnavshow
    }
  }
}
</script>

<style lang="less" scoped>
.navbox {
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 10;
  cursor: pointer;
  .toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    button.el-button.el-button--success {
      width: 40px;
      height: 40px;
      color: #fff;
      background-color: #303133;
      border-color: #303133;
      span.el-icon-s-fold {
        font-size: 25px;
        position: fixed;
        top: 28px;
        right: 28px;
      }
      span.el-icon-close {
        font-size: 25px;
        position: fixed;
        top: 28px;
        right: 28px;
      }
    }
    #navbtn:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .navigation {
    background-color: #f2f1f1;
    width: 80px;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    .seat {
      height: 60px;
    }
    .nav-list {
      padding: 20px 0px;
    }
    .nav-list:hover {
      background-color: #aed6e1;
    }
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
/*入场动画的时间段      出场动画的时间段*/
.v-enter-active,
.v-leave-active {
  transition: all 0.2s linear;
}
</style>
