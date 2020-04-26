<template>
  <div class="article-box">
    <article-head></article-head>
    <article-content></article-content>
    <Footer></Footer>
  </div>
</template>

<script>
import articleHead from '@/components/article/articleHead'
import articleContent from '@/components/article/articleContent'
import Footer from '@/components/home/footer'
export default {
  data() {
    return {}
  },
  components: {
    articleHead,
    articleContent,
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
