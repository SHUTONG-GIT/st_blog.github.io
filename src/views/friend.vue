<template>
  <div class="friend-links">
    <friend-content></friend-content>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/home/footer'
import friendContent from '@/components/friend/friendcontent'

export default {
  data() {
    return {}
  },
  components: {
    Footer,
    friendContent
  }
}
</script>

<style lang="less" scoped>
</style>
