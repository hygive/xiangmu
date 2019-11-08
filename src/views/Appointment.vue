<template>
  <div class="home">
    <div class="calendar">
      <ul class="date">
        <li v-for="(item,index) in listData" :key="index" @click="selectRadio(index)" :class="{active:index===number}">
          <div>{{item.data}}</div>
          <div>{{item.day}}</div>
        </li>
      </ul>
      <div class="right">
        <p>全部<pre>日历</pre></p>
        <img src="../assets/image/sanjiao.png" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "appointment",
  components: {},
  data() {
    return {
        number:1,
      listData: [
        { data: this.getWeek(-1), day:this.getDay(-1) },
        { data: this.getWeek(0), day: this.getDay(0) },
        { data: this.getWeek(1), day: this.getDay(1) },
        { data: this.getWeek(2), day: this.getDay(2) },
        { data: this.getWeek(3), day:this.getDay(3) },
        { data: this.getWeek(4), day:this.getDay(4)}
      ]
    };
  },
  methods:{
      selectRadio(index){
          this.number= index; 
        
      },
    getWeek(i){
        var aa
        if(i>new Date().getDay()){
            aa = "星期" + "日一二三四五六".charAt(new Date().getDay()- i + 7);
        } else {
            aa = "星期" + "日一二三四五六".charAt(new Date().getDay()-i);
        }
        return aa
    },
   getDay(day){
            var today = new Date();                  
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
  }   
  },
  mounted(){
  
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
</style>
