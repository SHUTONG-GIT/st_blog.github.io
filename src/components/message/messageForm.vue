<template>
  <div class="message-main">
    <div class="message-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="content-input">
          <el-form-item label="昵称:" prop="uname">
            <el-input v-model="ruleForm.uname" maxlength="15" />
          </el-form-item>
        </div>
        <div class="add-textarea">
          <el-form-item label="内容:" prop="msg">
            <el-input type="textarea" v-model="ruleForm.msg" maxlength="200" />
          </el-form-item>
        </div>
        <div class="add-btn">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="msgpanel">
      <h3>留言列表</h3>
      <div class="msglist">
        <ul>
          <li class="list-item" v-for="item in messagelist" :key="item.uid">
            <div class="list-box">
              <div class="msg-img">
                <img src="../../assets/img/message-img/msg.jpg" />
              </div>
              <div class="list-content">
                <div class="list-tilte">
                  <h4 class="name">{{item.uname}}</h4>
                  <span class="time">{{item.msgtime | formatDate}}</span>
                </div>
                <div class="list-msg">
                  <p class="item-msg">{{item.msg}}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from './date.js'
export default {
  data() {
    return {
      messagelist: [],
      ruleForm: {
        uname: '',
        msg: ''
      },
      // 表单验证
      rules: {
        uname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        msg: [{ required: true, message: '请输入留言内容', trigger: 'blur' }]
      }
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  mounted() {
    this.$http
      .get('http://127.0.0.1:3000/msg/getlist')
      .then(res => {
        // console.log(res)
        this.messagelist = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('留言成功')
          // console.log(this.ruleForm.uname + this.ruleForm.msg)
          // this.messagelist.push({
          //   uid: this.messagelist.length,
          //   uname: this.ruleForm.uname,
          //   msgtime: this.gettime(),
          //   msg: this.ruleForm.msg
          // })
          this.addmsg()
          this.resetForm(formName)
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    addmsg() {
      this.$http
        .post('http://127.0.0.1:3000/msg/addmsg', {
          uid: null,
          uname: this.ruleForm.uname,
          msgtime: this.gettime(),
          msg: this.ruleForm.msg
        })
        .then(res => {
          // console.log(res.data)
          this.messagelist = res.data
        })
    },
    gettime() {
      // 获取当前时间
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minute = date.getMinutes()
      var second = date.getSeconds()
      month < 10 && (month = '0' + month)
      day < 10 && (day = '0' + day)
      hour < 10 && (hour = '0' + hour)
      minute < 10 && (minute = '0' + minute)
      second < 10 && (second = '0' + second)
      return (
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      )
    }
  }
}
</script>

<style lang="less" scoped>
.message-content {
  background-color: #fff;
  border-bottom: 10px solid #f3f5f9;
  padding: 0px 80px 0px 0px;
  .content-input,
  .add-textarea {
    margin: 10px 0px;
    padding: 15px;
    border-bottom: 3px solid #f0f2f5;
  }
  .add-btn {
    padding: 15px;
  }
}
.msgpanel {
  padding: 20px 30px;
  border-bottom: 25px solid #f0f2f5;
  .msglist {
    margin: 10px 0px;
    ul {
      list-style: none;
    }
    .list-box {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eceaea;
      margin: 5px 0px;
      img {
        width: 65px;
      }
      .list-content {
        margin: 10px;
        h4.name {
          display: inline-block;
          margin: 0px 10px;
        }
        span.time {
          font-size: 13px;
          color: #9e9e9e;
          font-weight: 300;
        }
        p.item-msg {
          font-size: 14px;
          color: #333;
          margin-top: 10px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
