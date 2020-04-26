<template>
  <transition appear enter-active-class="animated fadeIn">
    <div id="aboutme">
      <div class="about-title">
        <h1>关于</h1>
      </div>
      <div class="ab-box">
        <div class="ab-left">
          <!-- 左边布局 -->
          <img class="left-img" src="../../assets/img/about-img/about.jpeg" />
          <!-- 右边布局 -->
        </div>

        <div class="ab-right">
          <div class="right-header">
            <h3 class="right-title">关于我</h3>
          </div>
          <!-- 自我介绍 -->
          <div class="right-main">
            <p>一只心向前端的菜鸟小白，大学之前的我对计算机一知半解，听从家人意见选择了软件专业，大一那会学的很费劲也很累，但之后学到前端后才真正激起了我的兴趣，对前端有了强烈的好奇心，从此编程变成了我觉得对我来说成就感最强的一件事了。</p>
            <p>大学期间荣幸地被学校选入Web1+X训练营，在此期间真正让我学到了更多的东西，真心感谢我那时的老师教会了我很多。</p>
          </div>
          <!-- 自我标签 -->
          <div class="right-tag1">
            <h4>自我标签</h4>
            <ul class="right-ul">
              <li>编程</li>
              <li>思考</li>
              <li>幽默</li>
              <li>电影</li>
              <li>游戏</li>
              <li>乐观派</li>
            </ul>
          </div>
          <!-- 技术标签 -->
          <div class="right-tag2">
            <h4>技术标签</h4>
            <ul class="right-ul2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Vue</li>
              <li>MySQL</li>
              <li>PHP</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#aboutme {
  padding: 20px 100px 20px 20px;
  .about-title {
    margin: 20px 0px;
    border-bottom: 1px solid #ccc;
    h1 {
      margin: 20px 0px;
      padding: 0px 20px;
      border-left: 2px solid #03a9f4;
    }
  }
  .ab-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: black;
    padding: 5px;
    .ab-left {
      width: 65%;
      margin: 0px 20px 30px 9px;
      box-sizing: border-box;
      border: 12px solid white;
      border-radius: 5px;
      .left-img {
        width: 100%;
        height: 100%;
      }
    }
    .ab-right {
      background-color: white;
      width: 35%;
      border: 1px solid;
      border-radius: 5px;
      .right-title {
        text-align: center;
        padding: 15px;
        border-bottom: 1px solid #aaa;
      }
      .right-main {
        padding: 15px;
        border-bottom: 1px solid #aaa;
        p {
          text-indent: 2em;
        }
      }
      .right-tag1,
      .right-tag2 {
        padding: 15px;
      }
    }
  }
}
.right-tag1 {
  border-bottom: 1px solid #aaa;
  h4 {
    text-align: center;
    padding: 10px;
  }
  ul.right-ul {
    overflow: hidden;
    list-style: none;
    li {
      list-style: none;
      float: left;
      margin: 10px 15px;
      padding: 10px 15px;
      border: 1px solid #ff9e00;
      border-radius: 13px;
      color: #ff9e00;
    }
  }
}
.right-tag2 {
  h4 {
    text-align: center;
    padding: 10px;
  }
  ul.right-ul2 {
    overflow: hidden;
    list-style: none;
    li {
      list-style: none;
      float: left;
      margin: 10px 15px;
      padding: 10px 15px;
      border: 1px solid #40a109;
      border-radius: 13px;
      color: #40a109;
    }
  }
}
</style>
