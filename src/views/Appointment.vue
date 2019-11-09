<template>
  <div class="home">
    <div class="calendar">
      <ul class="date">
        <li
          v-for="(item,index) in listData"
          :key="index"
          @click="selectRadio(index)"
          :class="{active:index===number}"
        >
          <div>{{item.data}}</div>
          <div>{{item.day}}</div>
        </li>
      </ul>
      <div class="right" @click="showCalendar('isVisible')">
        <p>全部<pre>日历</pre></p>
        <img src="../assets/image/sanjiao.png" alt srcset />
      </div>
      <nut-calendar
        :is-visible="isVisible"
        :default-value="date"
        @close="switchPicker('isVisible')"
        @choose="setChooseValue"
      ></nut-calendar>
    </div>

    <div class="contanier">
      <div class="hour_z">
        <p>请选择预约时间</p>
        <ul class="hour">
          <li
            v-for="(items,idex) in listHour"
            :key="idex"
            @click="selectTime(idex)"
            :class="{ys:idex===num}"
          >{{items}}</li>
        </ul>
      </div>
      <div class="concat">
        <h2>联系人</h2>
        <div class="name">
          <span>姓名</span>
          <input type="text" />
        </div>
        <div class="name">
          <span>电话</span>
          <input type="number" />
        </div>
        <h2>地址</h2>
        <div class="city">
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
        <div class="moreIfor1">
          <span class="write">详细地址</span>
          <input type="text" />
        </div>
      </div>
   
    <div class="service">
        <p>价格服务</p>
        <p><span>￥500</span> 元 / 次</p>
    </div>
    <div class="service padd-bottom">
         <p>优惠劵</p>
        <p>￥100</p>
    </div>
     </div>

     <div class="footer">
         <p>实际支付 <span>￥100</span></p>
         <div>立即预约</div>
     </div>
  </div>
</template>

<script>
import areaFile from "../assets/js/area.js";
export default {
  name: "appointment",
  components: {},
  data() {
    return {
      isVisible: false, //京东日历
      date: null,
      dateWeek: null,
      number: 0,
      num: 0,
      listData: [],
      listHour: [
        "9:00-10:00",
        "11:00-12:00",
        "13:00-14:00",
        "14:00-15:00",
        "15:00-16:00",
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00"
      ],
      address: " /  / ",
      SelectProvinceName: "省",
      SelectCityName: "市",
      SelectCountyName: "区",
      show: false,
      areaList: areaFile,
      colNum: "3" //省市区显示列数，3-省市区，2-省市，1-省
    };
  },
  methods: {
    selectRadio(index) {
      this.number = index;
    },
    getWeek(i, day) {
      var aa;
      // console.log(new Date().getDay());
      if (i > parseInt(day)) {
        aa = "星期" + "日一二三四五六".charAt(parseInt(day) - i + 7);
      } else {
        aa = "星期" + "日一二三四五六".charAt(parseInt(day) - i);
      }

      return aa;
    },
    getDay(day, nowday) {
      var today = new Date(nowday);
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      //console.log(tYear+"-"+tMonth+"-"+tDate)
      //bbb7.push(tYear+"-"+tMonth+"-"+tDate);
      return tDate;
    },
    doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = month;
      }
      return m;
    },
    //京东日历弹框
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(param) {
      var weekday = [];
      weekday["星期日"] = 0;
      weekday["星期一"] = 1;
      weekday["星期二"] = 2;
      weekday["星期三"] = 3;
      weekday["星期四"] = 4;
      weekday["星期五"] = 5;
      weekday["星期六"] = 6;
      var data = param[0] + "/" + param[1] + "/" + param[2];
      var wday = weekday[param[4]];
      this.listData = [
        { data: this.getWeek(0, wday), day: this.getDay(0, data) },
        { data: this.getWeek(1, wday), day: this.getDay(1, data) },
        { data: this.getWeek(2, wday), day: this.getDay(2, data) },
        { data: this.getWeek(3, wday), day: this.getDay(3, data) },
        { data: this.getWeek(4, wday), day: this.getDay(4, data) },
        { data: this.getWeek(5, wday), day: this.getDay(5, data) }
      ];
    },
    //点击日历显示日历
    showCalendar(param) {
      this[`${param}`] = !this[`${param}`];
    },
    //时间选择
    selectTime(idex) {
      console.log(idex);
      this.num = idex;
      console.log(this.num);
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
    }
  },
  mounted() {
    var today = new Date();
    var data =
      today.getFullYear() +
      "/" +
      (parseInt(today.getMonth()) + 1) +
      "/" +
      today.getDate();
    console.log(data);
    this.listData = [
      { data: this.getWeek(0, new Date().getDay()), day: this.getDay(0, data) },
      { data: this.getWeek(1, new Date().getDay()), day: this.getDay(1, data) },
      { data: this.getWeek(2, new Date().getDay()), day: this.getDay(2, data) },
      { data: this.getWeek(3, new Date().getDay()), day: this.getDay(3, data) },
      { data: this.getWeek(4, new Date().getDay()), day: this.getDay(4, data) },
      { data: this.getWeek(5, new Date().getDay()), day: this.getDay(5, data) }
    ];
  }
};
</script>
<style scoped>
.calendar {
  font-size: 0.24rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.date {
  display: flex;
  flex-direction: row;
  width: 6rem;
  justify-content: space-between;
  text-align: center;
  padding: 0.26rem 0.2rem;
}
.date li {
  font-size: 0.24rem;
  padding: 0.1rem 0.1rem;
}
.date li div:nth-child(1) {
  color: #b6b6b6;
  padding-bottom: 0.2rem;
}
.date li div:nth-child(2) {
  font-weight: bold;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #f0f0f0;
  padding-left: 0.2rem;
}
.right p {
  padding-bottom: 0.1rem;
}
.right img {
  width: 0.19rem;
  height: 0.11rem;
}
.active {
  background: #b2985b;
  border-radius: 5px;
  color: #fff !important;
}
.home /deep/.nut-calendar-control .nut-calendar-confirm-btn {
  color: #b2985b !important;
}
.home /deep/.nut-calendar-control .nut-calendar-cancel-btn {
  color: #b2985b !important;
}
.home /deep/.nut-calendar-month-day-active {
  background: #b2985b !important;
}
.home /deep/ .nut-calendar-control .nut-calendar-week span:first-child {
  color: #b2985b !important;
}
.home /deep/.nut-calendar-control .nut-calendar-week span:last-child {
  color: #b2985b !important;
}
/*内容部分 */
.contanier {
  background: #f3f3f3;
  padding: 0.2rem 0.3rem;
  width: 100%;
  box-sizing: border-box;
}
.hour_z {
  background: #fff;
  padding: 0.34rem 0.3rem;
}
.hour_z p {
  font-size: 0.34rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.36rem;
}
.hour {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around */
}

.hour li {
  /* padding: 0.26rem; */
  height: 0.7rem;
  width: 1.9rem;
  line-height: 0.7rem;
  text-align: center;
  color: #9a9a9a;
  font-weight: bold;
  border: 1px solid #ededed;
  border-radius: 5px;
  font-size: 0.26rem;
  margin-bottom: 0.2rem;
  margin-right: 0.1rem;
  margin-left: 0.06rem;
}
.ys {
  color: #85754e !important;
  border: 1px solid #85754e !important;
  background: #ede9de !important;
}
.concat {
  background: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.8rem;
}
.concat h2 {
  font-size: 0.34rem;
  font-weight: bold;
  padding: 0.34rem 0.3rem;
}
.name {
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: row;
  font-size: 0.3rem;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 0.3rem 0.2rem;
}
.name span {
  color: #909193;
}
.name input {
  padding: 0 0.5rem;
}

.city {
  border-bottom: 1px solid #d6d6d6;
}
.specific {
  display: flex;
  flex-direction: row;
  width: 5.4rem;
  font-size: 0.3rem;
  color: #333;
  /* border-bottom: 1px solid #d6d6d6; */
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
  background: #fff !important;
}
.city /deep/ .van-cell__value {
  padding: 0 0.3rem;
}
.city /deep/ .van-cell i {
  display: none !important;
}
.city   /deep/ .van-picker__cancel{
  color: #b2985b !important;
   }
 .city   /deep/ .van-picker__confirm{
  color: #b2985b !important;
   }
.moreIfor1 {
  font-size: 0.3rem;
  margin-top: 0.4rem;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  flex-direction: row;
  padding: 0 0.3rem 0.2rem;
}
.moreIfor1 span {
  color: #909193;
}
.moreIfor1 input {
  padding: 0 0 0 0.5rem;
  font-size: 0.3rem;
}
.service{
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.3rem;
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.service p span{
  font-size: 0.36rem;
  color: #e44318;
  font-weight: bold;
}
/* 底部定位 */
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* padding: 0.2rem 0.4rem; */
  font-size: 0.3rem;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
      align-items: center;
}
.footer span{
  font-size: 0.36rem;
  color: #e44318;
}
.footer div{
  width: 2.3rem;
  height: 1.05rem;
  background: #b9a26a;
  line-height: 1.05rem;
  text-align: center;
  color: #fff;
  }
.footer p{
   padding: 0 0 0 0.4rem;
}
.padd-bottom{
  margin-bottom: 1rem;
}
</style>
