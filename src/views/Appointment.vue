<template>
  <div class="home">
    <div class="calendar">
      <ul class="date">
        <li v-for="(item,index) in listData" :key="index" @click="selectRadio(index)" :class="{active:index===number}">
          <div>{{item.data}}</div>
          <div>{{item.day}}</div>
        </li>
      </ul>
      <!-- <div class="right" @click="showCalendar"> -->
        <div class="right" @click="showCalendar('isVisible')">
        <p>全部<pre>日历</pre></p>
        <img src="../assets/image/sanjiao.png" alt srcset />
      </div>

    </div>
  <nut-calendar 
      :is-visible="isVisible"
      :default-value="date"
      @close="switchPicker('isVisible')"
      @choose="setChooseValue"
  >
 </nut-calendar>
  </div>
</template>

<script>

export default {
  name: "appointment",
  components: {},
  data() {
    return {
      isVisible: false,//京东日历
      date: null,
      dateWeek: null,
      number:1,
      listData: []
    };
  },
  methods:{
      selectRadio(index){
          this.number= index; 
        
      },
    getWeek(i,day){
        var aa
        // console.log(new Date().getDay());
        if(i>parseInt(day)){
            aa = "星期" + "日一二三四五六".charAt(parseInt(day)- i + 7);
        } else {
            aa = "星期" + "日一二三四五六".charAt(parseInt(day)-i);
        }
       
        return aa
    },
   getDay(day,nowday){
           
            var today = new Date(nowday);                  
            var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;                   
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
        doHandleMonth(month){
          var m = month;        
          if(month.toString().length == 1){            
              m =  month;         
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
            var data = param[0]+'/'+param[1]+'/'+param[2];
            var wday = weekday[param[4]];
           this.listData = [
              { data: this.getWeek(-1,wday), day:this.getDay(-1,data) },
              { data: this.getWeek(0,wday), day: this.getDay(0,data) },
              { data: this.getWeek(1,wday), day: this.getDay(1,data) },
              { data: this.getWeek(2,wday), day: this.getDay(2,data) },
              { data: this.getWeek(3,wday), day:this.getDay(3,data) },
              { data: this.getWeek(4,wday), day:this.getDay(4,data)}
            ];

     
          console.log(param)
            // this.date = param[2];
            
            // this.dateWeek = param[4];
          
            //    this.listData.data[1]=this.dateWeek
            
           
        },
      //点击日历显示日历
      showCalendar(param){
          this[`${param}`] = !this[`${param}`];
      }
  },
  mounted(){
    var today = new Date();
     var data = today.getFullYear()+'/'+(parseInt(today.getMonth())+1)+'/'+today.getDate();
            console.log(data);
    this.listData = [
        { data: this.getWeek(-1,new Date().getDay()), day:this.getDay(-1,data) },
        { data: this.getWeek(0,new Date().getDay()), day: this.getDay(0,data) },
        { data: this.getWeek(1,new Date().getDay()), day: this.getDay(1,data) },
        { data: this.getWeek(2,new Date().getDay()), day: this.getDay(2,data) },
        { data: this.getWeek(3,new Date().getDay()), day:this.getDay(3,data) },
        { data: this.getWeek(4,new Date().getDay()), day:this.getDay(4,data)}
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
.active{
    background: #b2985b;
    border-radius: 5px;
    color: #fff !important
}
.home /deep/.nut-calendar-control .nut-calendar-confirm-btn{
  color: #b2985b !important;
}
.home /deep/.nut-calendar-control .nut-calendar-cancel-btn{
   color: #b2985b !important;
}
.home  /deep/.nut-calendar-month-day-active{
     background: #b2985b !important;
   }
.home  /deep/   .nut-calendar-control .nut-calendar-week span:first-child{
     color: #b2985b !important;
   }
.home  /deep/.nut-calendar-control .nut-calendar-week span:last-child{
 color: #b2985b !important;
  }
</style>
