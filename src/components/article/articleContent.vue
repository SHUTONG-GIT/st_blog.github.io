<template>
  <div class="art-content" id="art-content">
    <div class="content-left">
      <div class="left-box">
        <div class="left-first">
          <h2>文章内容</h2>
          <p>分享一些学习过程中的基础笔记，以及在开发本博客遇到的一些问题和解决方法。</p>
        </div>
        <div class="search">
          <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model.lazy="search"></el-input>
        </div>
        <transition-group appear enter-active-class=" animated fadeInUp">
          <div
            class="art-list"
            v-for="(item, index) in filteredarticles"
            :key="index"
            v-show="filteredarticles"
          >
            <div class="list-title">
              <router-link :to="'/note/' + item.name">
                <h3>
                  <span>{{item.name}}</span>
                  <span class="ctime">{{item.ctime}}</span>
                </h3>
              </router-link>
            </div>
            <div class="list-content">
              <p class="note-content">{{item.content}}</p>
            </div>
            <div class="read-more">
              <router-link :to="'/note/' + item.name">阅读全文></router-link>
            </div>
            <div class="read-more">
              <router-link to="/message">留言</router-link>
            </div>
          </div>
        </transition-group>
        <div class="searchfail">
          <div
            class="fail-content"
            v-show="filteredarticles != undefined && filteredarticles.length == 0"
          >
            <img src="../../assets/img/article-img/fail.jpg" alt />
            <p>未查询到任何结果。。。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notelists: [],
      search: ''
    }
  },
  components: {},
  mounted() {
    this.$http
      .get('http://127.0.0.1:3000/article/getNotelist')
      .then(res => {
        this.notelists = res.data
        console.log(this.notelists)
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    filteredarticles() {
      return this.notelists.filter(notelist => {
        return notelist.name.match(this.search)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.art-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 25px;
  box-sizing: border-box;
  background-color: #f0f5f7;
  h2,
  h3 {
    margin: 10px 0px;
    padding: 10px;
  }
  p {
    margin: 10px 20px;
    font-size: 14px;
  }
  .content-left {
    width: 85%;
    margin: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px #ccc;
    .left-first {
      background-color: #b2bbd7;
      padding: 20px;
      margin: 20px 0px;
      border-radius: 8px;
    }
    .art-list {
      background-color: white;
      padding: 20px;
      margin: 20px 0px;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      .list-title {
        margin: 10px 0px;
        .ctime {
          display: inline-block;
          margin: 0px 20px;
          font-size: 12px;
          color: #aaa;
        }
      }
      .list-content {
        margin: 10px 0px;
        p.note-content {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #757373;
        }
      }
      .read-more {
        float: right;
        margin: 10px 20px;
        font-size: 14px;
        a {
          color: #2196f3;
        }
      }
    }
    .art-list:hover {
      box-shadow: 5px 5px 10px #ccc;
      background-color: #dbe2e3;
    }
    .searchfail {
      background-color: whitesmoke;
      margin-top: 50px;
      padding: 0px 19px;
      .fail-content {
        display: flex;
        align-items: center;
        padding: 40px 0px;
        img {
          width: 100px;
        }
      }
      .backUp {
        padding: 20px;
        display: flex;
        justify-content: flex-end;
        a {
          color: lightskyblue;
        }
      }
    }
  }
}
</style>
