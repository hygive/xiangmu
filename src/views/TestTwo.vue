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
        <div class="mark"></div>
        <div class="mark"></div>
        <div class="mark"></div>
      </li>
      <li>
        <div class="one">
          <img src="../assets/image/test2-2.png" alt class="twoimg" />
          <span class="active">填写问卷</span>
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
      <h2>填写问卷</h2>
      <div class="first">
        <div class="title">1.您觉得皮肤存在哪些问题？（多选）</div>
        <div class="check">
          <button
            :class="list0[index].active==true?'avtive':''"
            @click="Onactive(index)"
            v-for="(item,index) of list0"
            :key="index"
          >{{item.name}}</button>
        </div>
      </div>
      <!-- <div class="first">
        <div class="title">1.您多久敷一次面膜？</div>
        <div class="check">
          <button
            :class="active0==index?'avtive':''"
            @click="OnactiveTwo(index)"
            v-for="(item,index) of list1"
            :key="index"
          >{{item}}</button>
        </div>
      </div> -->
   
      <div class="first">
        <div class="title">1.您想我们可以做哪些改变？</div>
        <div class="check1">
          <textarea placeholder="例如：可以定制上门服务"></textarea>
        </div>
      </div>
       <button class="next" @click="nextThree">下一步</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "testtwo",
  components: {},
  data() {
    return {
      list0: [
        { active: false, name: "干燥" },
        { active: false, name: "干裂" },
        { active: false, name: "长痘痘" },
        { active: false, name: "色斑" }
      ],
      active0: -1,
      list1: ["每天都敷", "一周三次以上", "一周两次", "不敷"],
      listData:[
       {title:"您多久敷一次面膜？",Item:["每天都敷", "一周三次以上", "一周两次", "不敷"]},
       {title:"您多久敷一次面膜2？",Item:["每天都敷", "一周三次以上", "一周两次", "不敷"]},
       {title:"您多久敷一次面膜3？",Item:["每天都敷", "一周三次以上", "一周两次", "不敷"]}
        ]
    };
  },
  methods: {
    Onactive(even) {
      //this.even
      if (this.list0[even].active == true) {
        this.list0[even].active = false;
      } else {
        this.list0[even].active = true;
      }
    },
    OnactiveTwo(even) {
      this.active0 = even;
    },
    nextThree(){
      this.$router.push("/testtwo/testthree")
    }
  }
};
</script>


<style scoped>
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
.oneimg{
  width: 0.31rem;
  height: 0.3rem;
  /* margin-bottom: 0.02rem !important; */
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
.title {
  font-size: 0.3rem;
  color: #333;
}
.check {
  display: flex;
  flex-direction: column;
  font-size: 0.26rem;
  margin-top: 0.14rem;
}
.check button {
  width: 100%;
  background: #fff;
  border: 1px solid #c1c1c1;
  color: #c1c1c1;
  height: 0.8rem;
  margin: 0 0 0.16rem 0;
  border-radius: 5px;
}
.avtive {
  background: #a8925b !important;
  color: #fff !important;
}
textarea {
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
}
.check1 {
  display: flex;
  flex-direction: column;
  font-size: 0.26rem;
  margin-top: 0.14rem;
  border: 1px solid #c1c1c1;
  height: 3rem;
  width: 100%;
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
  margin:0.6rem auto 0.6rem;
  
}
</style>
