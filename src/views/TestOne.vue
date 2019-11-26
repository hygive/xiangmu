<template>
  <div class="home">
    <ul class="header">
      <li>
        <div class="one">
          <img src="../assets/image/test1.png" alt class="oneimg" />
          <span class="active">基本资料</span>
        </div>
      </li>
      <li>
        <div class="mark mark_select"></div>
        <div class="mark mark_select"></div>
        <div class="mark mark_select"></div>
      </li>
      <li>
        <div class="one">
          <img src="../assets/image/test2.png" alt class="twoimg" />
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
          <img src="../assets/image/test3.png" alt class="threeimg" />
          <span>拍照视频</span>
        </div>
      </li>
    </ul>
    <div class="container">
      <h2>基本资料</h2>
      <div class="name">
        <span>姓名</span>
        <input type="text" v-model="infor" ref="username" />
      </div>
      <div class="time">
        <div class="time_l">
          <span class="write">请选择出生日期</span>
          <div class="year" @click="openPicker">
            <span ref="birth">{{time}}</span>
            <img src="../assets/image/xia.png" alt srcset />
          </div>
          <div class="tankuang">
            <mt-datetime-picker
              type="date"
              ref="picker"
              v-model="dateVal"
              :startDate="starttime"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日"
              @confirm="handleConfirm"
            ></mt-datetime-picker>
          </div>
        </div>
        <div class="time_r">
          <span class="write">性别</span>
          <van-radio-group v-model="radio">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="tel">
        <span class="write">请输入手机号码</span>
        <input type="number" v-model="phone" ref="userphone" />
      </div>
      <div class="city">
        <span class="write">请选择地址</span>
        <van-cell is-link @click="showPopup">
          <div class="specific">
            <span>{{SelectProvinceName}}</span>
            <span>{{SelectCityName}}</span>
            <span>{{SelectCountyName}}</span>
            <img src="../assets/image/xia.png" alt srcset />
          </div>
        </van-cell>
        <van-popup v-model="show" position="bottom">
          <van-area
            :area-list="areaList"
            :columns-num="colNum"
            @confirm="confirmFn"
            @cancel="cancelFn"
          />
        </van-popup>
      </div>
      <div class="moreIfor">
        <span class="write">详细地址</span>
        <input type="text" v-model="address" ref="useraddress" />
      </div>
      <button class="next" @click="nextTwo">下一步</button>
    </div>
  </div>
</template>

<script>
import { publicMethod, yeardate } from "../assets/js/timechou.js";

import store from "../store/index.js";
import { Toast } from "mint-ui";
import areaFile from "../assets/js/area.js";
import { log } from "util";
export default {
  name: "testone",
  components: {},
  data() {
    return {
      time: "",
      starttime: new Date("1900-01"),
      radio: "1",
      dateVal: new Date(), // 默认是当前日期
      address: " /  / ",
      SelectProvinceName: "省",
      SelectCityName: "市",
      SelectCountyName: "区",
      show: false,
      areaList: areaFile,
      colNum: "3", //省市区显示列数，3-省市区，2-省市，1-省
      //
      infor: "",
      address: "",
      phone: ""
    };
  },
  methods: {
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + " / " + m;
    },
    // formatDate1(date) {
    //   const y = date.getFullYear();
    //   let m = date.getMonth() + 1;
    //   m = m < 10 ? "0" + m : m;
    //   let d = date.getDate();
    //   d = d < 10 ? "0" + d : d;
    //   return y + " - " + m;
    // },
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(data) {
      // console.log(this.formatDate(data));
      var newdata = this.formatDate(data);
      this.time = newdata;
    },

    nextTwo() {
      var now = new Date();
      var nowchuo = now.getTime()/1000;
      console.log(nowchuo);
      var a=localStorage.getItem("valid_time");
      console.log(a>nowchuo)
      if(a>nowchuo){
        this.$axios.post("/api/user/info",{})
      }else{
        this.getTokenInfor()
      }
      //   var arry1 = [];
      //   var city = [];
      //   if (this.infor == "") {
      //     Toast("姓名不能为空");
      //   } else if (this.time == "") {
      //     Toast("出生年月不能为空");
      //   } else if (this.phone == "") {
      //     Toast("请输入正确手机号码");
      //   } else if (
      //     this.SelectProvinceName == "省" &&
      //     this.SelectCityName == "市" &&
      //     this.SelectCountyName == "区"
      //   ) {
      //     Toast("请选择地址");
      //   } else if (this.address == "") {
      //     Toast("请填写详细地址");
      //   } else {
      //     arry1.push(this.infor);
      //                   //  arry1.push(publicMethod.getTimestamp(this.time))
      //     arry1.push(this.time);
      //     arry1.push(this.radio);
      //     arry1.push(this.phone);
      //     city.push(this.SelectProvinceName);
      //     city.push(this.SelectCityName);
      //     city.push(this.SelectCountyName);
      //     arry1.push(city);
      //     arry1.push(this.address);
      //     var obj1 = { one: arry1 };
      //     console.log(arry1);
      //     console.log(obj1);
      //     localStorage.setItem("OneObj1", JSON.stringify(obj1));
      this.$router.push({
        path: "/testtwo"
      });
      // }
    },
    // 弹框按钮
    showPopup() {
      this.show = true;
    },
    //省市区完成按钮
    confirmFn(val) {
      this.show = false;
      this.SelectProvinceName = val[0].name; // 省
      this.SelectCityName = val[1].name; // 市
      this.SelectCountyName = val[2].name; //区
    },

    //省市区取消按钮
    cancelFn() {
      this.show = false;
      console.log("点击了取消按钮");
    },

    getTokenInfor() {
      // var unionid=ccttp
      this.$axios
        .post("/api/token/get-token", {
          unionid: "ccttp"
        })
        .then(res => {
          console.log(res.data.data);
          var data = res.data.data;
          var furetitme = data.valid_time;
          // var now = new Date();
          // var nowchuo=now.getTime()
          //  console.log(now.getTime())
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("valid_time", furetitme);
          //   if(nowchuo>furetitme){
          //       this.getTokenInfor()
          //       localStorage.setItem('token',JSON.stringify(data.token))
          //   }else{
          //      localStorage.setItem('token',JSON.stringify(data.token))
          //   }

          //  console.log(JSON.parse(localStorage.getItem('token')) || '[]')
          //  var getdata=JSON.parse(localStorage.getItem('token'))
          //  console.log(getdata.token)
          //  console.log(getdata.valid_time);
        });
    }
    // getPeopleInfor(){
    //   var getdata=JSON.parse(localStorage.getItem('token'))

    //     if(getdata.token){

    //     }
    //   this.$axios.post("/api/user/info",{}).then(()=>{})
    // }
  },
  mounted() {
    if (localStorage.length > 0) {
      var localObj = JSON.parse(localStorage.getItem("OneObj1"));
      console.log(localObj.one);
      this.infor = localObj.one[0];
      this.time = localObj.one[1];
      this.radio = localObj.one[2];
      this.phone = localObj.one[3];
      this.SelectProvinceName = localObj.one[4][0];
      this.SelectCityName = localObj.one[4][1];
      this.SelectCountyName = localObj.one[4][2];
      this.address = localObj.one[5];
    }
    this.getTokenInfor();
  }
};
</script>

<style scoped>
.tankuang /deep/.picker-slot + .picker-slot + .picker-slot {
  display: none;
}
/* 进度条头部 */
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  text-align: center;
}
.one {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.24rem;
  color: #d6d6d6;
}
.active {
  color: #333;
}
.oneimg {
  width: 0.31rem;
  height: 0.3rem;
}
.twoimg {
  width: 0.27rem;
  height: 0.32rem;
}
.threeimg {
  width: 0.36rem;
  height: 0.26rem;
  margin-bottom: 0.06rem;
}
.one span {
  margin-top: 0.24rem;
}
.mark {
  width: 0.09rem;
  height: 0.09rem;
  border-radius: 50%;
  background-color: #b2b2b2;
  opacity: 0.5;
  float: left;
  margin-left: 0.18rem;
  margin-top: 0.18rem;
}
/* .mark_select{
    background-color: #000;
    opacity:1;
} */
/* 内容部分 */
.container {
  padding: 0 0.3rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.container h2 {
  color: #333;
  font-size: 0.48rem;
  margin-bottom: 0.4rem;
}
.name {
  display: flex;
  flex-direction: column;
  width: 5.4rem;
  border-bottom: 1px solid #d6d6d6;
}
.name span {
  color: #d6d6d6;
  font-size: 0.22rem;
}
.name input {
  font-size: 0.3rem;
  padding: 0.2rem 0;
  color: #333;
}
.time {
  overflow: hidden;
  margin-top: 0.4rem;
}
.time_l {
  float: left;
  width: 2.4rem;
  margin-right: 1rem;
}
.write {
  color: #d6d6d6;
  font-size: 0.22rem;
  margin-bottom: 0.1rem;
  display: block;
}
.year {
  /* width: 260px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0;
  border-bottom: 1px solid #d6d6d6;
}
.year span {
  font-size: 0.3rem;
  color: #333;
  display: block;
  padding-right: 0.3rem;
}
.year img {
  width: 0.23rem;
  height: 0.07rem;
  vertical-align: bottom;
}
.time_r {
  float: left;
}
.time_r /deep/ .van-radio-group {
  display: flex;
  flex-direction: row;
  margin-top: 0.4rem;
}
.time_r /deep/ .van-radio__label {
  font-size: 0.26rem;
}
.time_r /deep/ .van-radio {
  margin-right: 0.6rem;
}
.time_r /deep/ .van-radio__icon--checked .van-icon {
  background: #ac945b;
  border-color: #ac945b;
}
.home /deep/ .van-picker__cancel {
  color: #b2985b !important;
}
.home /deep/ .van-picker__confirm {
  color: #b2985b !important;
}
.home /deep/ .mint-datetime-cancel {
  color: #b2985b !important;
}
.home /deep/ .mint-datetime-confirm {
  color: #b2985b !important;
}
.home /deep/ .van-popup--bottom {
  top: 50%;
}
.home /deep/ .van-picker__toolbar {
  justify-content: space-around;
}
.tel {
  margin-top: 0.4rem;
  width: 5.4rem;
  border-bottom: 1px solid #d6d6d6;
}
.tel input {
  font-size: 0.3rem;
  display: block;
  padding: 0.2rem 0;
  width: 100%;
}

.moreIfor {
  margin-top: 0.4rem;
  border-bottom: 1px solid #d6d6d6;
}
.moreIfor input {
  width: 100%;
  display: block;
  padding: 0.2rem 0;
  font-size: 0.3rem;
}
.next {
  width: 5rem;
  height: 0.9rem;
  background: #aa935a;
  border-radius: 5px;
  color: #fff;
  font-size: 0.3rem;
  border: 0;
  outline: none;
  margin: 0.6rem auto 0.6rem;
}
.city {
  margin-top: 0.4rem;
}
.specific {
  display: flex;
  flex-direction: row;
  width: 5.4rem;
  font-size: 0.3rem;
  color: #333;
  border-bottom: 1px solid #d6d6d6;
  padding: 0.16rem 0;
  justify-content: space-between;
  align-items: center;
}
.specific img {
  width: 0.23rem;
  height: 0.07rem;
  vertical-align: bottom;
}
.city /deep/ .van-cell {
  padding: 0 !important;
  outline: #fff !important;
  background: #fff;
}
.city /deep/ .van-cell i {
  display: none !important;
}
</style>
