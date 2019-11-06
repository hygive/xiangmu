<template>
  <div class="home">
    <ul class="header">
      <li>
        <div class="one">
          <img src="../assets/image/test1.png" alt />
          <span class="active">基本资料</span>
        </div>
      </li>
      <li>
        <div class="mark"></div>
        <div class="mark"></div>
        <div class="mark"></div>
      </li>
      <li>
        <div class="one">
          <img src="../assets/image/test2.png" alt />
          <span>填写问卷</span>
        </div>
      </li>
      <li>
        <div class="mark"></div>
        <div class="mark"></div>
        <div class="mark"></div>
      </li>
      <li>
        <div class="one">
          <img src="../assets/image/test3.png" alt />
          <span>拍照视频</span>
        </div>
      </li>
    </ul>
    <div class="container">
      <h2>基本资料</h2>
      <div class="name">
        <span>姓名</span>
        <input type="text" />
      </div>
      <div class="time">
        <div class="time_l">
          <span class="write">请选择出生日期</span>
          <div class="year">
            <span @click="openPicker">{{time}}</span>
            <img src="../assets/image/xia.png" alt srcset />
          </div>
          <div class="tankuang">
            <mt-datetime-picker
              type="date"
              ref="picker"
              :startDate="starttime"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日"
              @confirm="handleConfirm"
            ></mt-datetime-picker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "testone",
  components: {},
  data() {
    return {
      time: "1995 / 12",
      starttime:new Date("1900-01")
    };
  },
  methods: {
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + " / " + m ;
    },

    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(data) {
      console.log(this.formatDate(data));
      var newdata = this.formatDate(data);
      this.time = newdata;
    }
  }
};
</script>

<style scoped>
.tankuang /deep/.picker-slot +.picker-slot +.picker-slot{ display: none}
/* 进度条头部 */
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 100px;
  text-align: center;
}
.one {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: #d6d6d6;
}
.active {
  color: #333;
}
.one:nth-child(1) img {
  width: 31px;
  height: 30px;
}
.one:nth-child(2) img {
  width: 27px;
  height: 32px;
}
.one:nth-child(3) img {
  width: 36px;
  height: 26px;
}
.one span {
  margin-top: 24px;
}
.mark {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #b2b2b2;
  opacity: 0.5;
  float: left;
  margin-left: 18px;
  margin-top: 18px;
}
/* 内容部分 */
.container {
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
}
.container h2 {
  color: #333;
  font-size: 48px;
  margin-bottom: 40px;
}
.name {
  display: flex;
  flex-direction: column;
  width: 480px;
  border-bottom: 1px solid #d6d6d6;
}
.name span {
  color: #d6d6d6;
  font-size: 22px;
}
.name input {
  font-size: 30px;
  padding: 20px 0;
  color: #333;
}
.time {
  overflow: hidden;
  margin-top: 40px;
}
.time_l {
  float: left;
}
.write {
  color: #d6d6d6;
  font-size: 22px;
  margin-bottom: 10px;
  display: block;
}
.year {
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #d6d6d6;
}
.year span {
  font-size: 30px;
  color: #333;
  display: block;
  padding-right: 30px;
}
.year img {
  width: 23px;
  height: 7px;
  vertical-align: bottom;
}
</style>
