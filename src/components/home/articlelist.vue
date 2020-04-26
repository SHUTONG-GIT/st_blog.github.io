<template>
  <div class="art-box">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="art-text">
      <slot name="htitle"></slot>
      <slot name="artmain"></slot>
      <slot name="art-link"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.art-box {
  .art-text {
    padding: 15px;
  }
}
.art-box:hover{
    box-shadow:0 10px 28px 0 darkgray ;
}
</style>
