<template>
  <div class="note-content">
    <div v-html="note" class="content-left"></div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/darkula.css'

export default {
  data() {
    return {
      note: ''
    }
  },
  components: {},
  created() {
    // console.log(this.$route)
    this.$http
      .get('http://127.0.0.1:3000/article/getNoteName/' + this.$route.params.id)
      .then(res => {
        // console.log(res)
        this.note = res.data
        this.$nextTick(() => {
          const blocks = document.querySelectorAll('pre code')
          blocks.forEach(block => {
            hljs.highlightBlock(block)
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.note-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 30px 100px;
  box-sizing: border-box;
  background-color: #f0f5f7;
}
</style>

<style lang="less">
.content-left {
  width: 100%;
  background-color: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px #ccc;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 20px 0px;
  }
  ul,
  ol {
    margin: 16px 0px;
    padding-left: 16px;
    list-style: none;
  }
  p {
    margin: 16px 10px;
  }
}
</style>
