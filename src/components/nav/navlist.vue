<template>
  <div class="list">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div id="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navlist'
}
</script>

<style lang="less" scoped>
.list {
  font-size: 30px;
  .icon {
    width: 30px;
    margin: 0px auto;
  }
  #text {
    width: 40px;
    margin: 0px auto;
    font-size: 20px;
  }
}
</style>
