<template>
  <div>
    <article-head></article-head>
    <note-content></note-content>
    <Footer></Footer>
  </div>
</template>

<script>
import articleHead from '@/components/article/articleHead'
import Footer from '@/components/home/footer'
import noteContent from '@/components/article/noteContent'

export default {
  data() {
    return {}
  },
  components: {
    articleHead,
    noteContent,
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
