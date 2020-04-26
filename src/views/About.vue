<template>
  <div class="about_page">
    <aboutheader></aboutheader>
    <abouttext></abouttext>
    <aboutweb></aboutweb>
    <Footer></Footer>
  </div>
</template>

<script>
import abouttext from '@/components/about/abouttext'
import Footer from '@/components/home/footer'
import aboutheader from '@/components/about/aboutheader'
import aboutweb from '@/components/about/aboutweb'

export default {
  data() {
    return {}
  },
  components: {
    abouttext,
    Footer,
    aboutheader,
    aboutweb
  }
}
</script>

<style lang="less" scoped>
.about_page{
  background-color: #ededed;
}
</style>
