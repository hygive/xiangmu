<template>
  <div>
     <ul class="header">
      <li>
        <div class="one">
          <img src="../assets/image/test1.png" alt class="oneimg"/>
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
          <img src="../assets/image/test2-2.png" alt  class="twoimg"/>
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
          <img src="../assets/image/test3-3.png" alt class="threeimg"/>
          <span class="active">拍照视频</span>
        </div>
      </li>
    </ul>
    <div class="container">
        <h2>拍照视频</h2>
        <div class="img_k"><img src="../assets/image/mian.png" alt="" srcset=""></div>
            <button class="next" @click="nextSucess">下一步</button>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "testthree",
  components: {},
  methods:{
      nextSucess(){
          this.$router.push("/testtwo/testthree/testsucess")
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
/* 内容 */
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
.img_k{
    display: flex;
    justify-content:space-around;
}

.container img{
    width: 5.92rem;
    height:7.54rem;
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