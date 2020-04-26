<template>
  <div class="home-container">
    <div class="main">
      <Welcome></Welcome>
    </div>
    <div class="content">
      <hotArticle></hotArticle>
      <page></page>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Welcome from '../components/home/welcome'
import hotArticle from '../components/home/hotArticle'
import page from '@/components/home/page'
import Footer from '../components/home/footer'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    Welcome,
    hotArticle,
    page,
    Footer
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  width: 100%;
  background-image: url(../assets/img/home-img/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  transition: all linear 0.3s;
  .main {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .content {
    padding: 80px 0px 15px 0px;
    background-color: ghostwhite;
  }
}
</style>
