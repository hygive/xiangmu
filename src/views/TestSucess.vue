<template>
  <div class="home">
    <h2>恭喜您！</h2>
    <p>您将免费领取</p>
    <div class="vip" v-for="(item,index) in list" :key="index">
      <img src="../assets/image/cart.png" alt />
      <div class="receive">领取</div>
      <div class="purpose">
        <span>{{item.shop}}</span>
        <span>{{item.time}}</span>
      </div>
      <div class="figure">￥</div>
      <div class="monery">{{item.monery}}</div>
      <div class="type">{{item.type}}</div>
    </div>
      <button class="next" @click="nextOrder">立即预约</button>
  </div>
</template>





<script>
export default {
  name: "testsucess",
  components: {},
  data(){
      return{
         list:[
             {"shop":"用于预约上门服务","time":"有效期：2019/10.18 - 2019/12.30","monery":"100","type":"代金卷"},
             {"shop":"用于预约上门服务","time":"有效期：2019/10.18 - 2020/12.30","monery":"200","type":"代金卷"}
         ]
      }
  },
  methods:{
      nextOrder(){
          this.$router.push("/testtwo/testthree/testsucess/appointment")
      }
  }
};
</script>
<style scoped>
.home {
  padding: 0 0.3rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.home h2 {
  font-size: 0.48rem;
  color: #333;
}
.home p {
  font-size: 0.26rem;
  color: #333;
  margin-top: 0.42rem;
}
.vip {
  margin-top: 0.45rem;
  position: relative;
}
.vip img {
  display: block;
  width: 6.87rem;
  height: 3.15rem;
}
.receive {
  position: absolute;
  left: 0.66rem;
  top: 1.4rem;

  width: 1.44rem;
  height: 0.56rem;
  background: #dcdde0;
  line-height: 0.56rem;
  font-size: 0.26rem;
  border-radius: 3px;
}
.purpose {
  position: absolute;
  left: 0.66rem;
  top: 2.2rem;
  font-size: 0.24rem;
}
.purpose span {
  display: block;
}
.purpose span:nth-child(1) {
  color: #fff;
  text-align: left;
}
.purpose span:nth-child(2) {
  color: #c4c5c8;
  margin-top: 0.14rem;
}
.figure {
  position: absolute;
  top: 0.52rem;
  left: 2.75rem;
  font-size: 0.66rem;
  color: #fff;
}
.monery {
  font-size: 1.8rem;
  color: #fff;
  position: absolute;
  top: 0.3rem;
  left: 3.4rem;
}
.type{
    font-size:0.24rem;
    color: #c4c5c8;
    position: absolute;
    right: 0.6rem;
    bottom: 0.28rem;
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
