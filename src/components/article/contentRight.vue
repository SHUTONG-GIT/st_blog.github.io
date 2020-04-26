<template>
  <div class="content-right">
    <div class="search">
      <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search"></el-input>
    </div>
    <div class="list-sort">
      <div class="sort-head">
        <h3>文章分类</h3>
      </div>
      <div class="sort-list">
        <ul>
          <li class="sort-item">
            <div class="count">1</div>
            <span>HTML</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="hot-article">
      <div class="hot-title">
        <h3>热门文章</h3>
        <div class="hot-list">
          <ul>
            <li class="hot-item">
              <div class="count">1</div>
              <span>HTML</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content-right {
  width: 25%;
  margin: 20px;
  .count {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 10px;
    border-radius: 50%;
    background-color: #00bcd4;
    text-align: center;
    line-height: 30px;
  }
  .list-sort {
    background-color: white;
    padding: 20px;
    margin: 20px 0px;
    li.sort-item {
      list-style: none;
      margin: 15px;
    }
  }
  .hot-article {
    background-color: white;
    padding: 20px;
    margin: 20px 0px;
    li.hot-item {
      list-style: none;
      margin: 15px;
    }
  }
  .search {
    background-color: #aaa;
    padding: 20px;
    margin: 20px 0px;
    .el-input--prefix .el-input__inner {
      border-radius: 20px;
    }
  }
}
</style>
