<template>
  <div class="home">
    <div class="swiper_z">
      <ul class="change">
        <li @click="cur=0" :class="{active:cur==0}">视频</li>
        <li @click="cur=1" :class="{active:cur==1}">图片</li>
      </ul>
      <div class="pages" v-show="cur==1">
        <span>{{num}}</span>
        <span>/</span>
        <span>{{total}}</span>
      </div>
      <div class="video1" v-show="cur==0">
        <video
          src="https://jewellery.keyunlai.cn/public/upload/treasure/8c972e570a14eb97b9bb828ff77a8466.mp4"
          controls
        ></video>
      </div>
      <div class="swipers" v-show="cur==1">
        <van-swipe :autoplay="3000" @change="onChange">
          <van-swipe-item v-for="(image, index) in images" :key="index" ref="shu">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="produce">
      <h2>HFP蜂胶滋润保湿面膜水润修护</h2>
      <p>蜂胶比蜂蜜拥有更滋润和养肤的功效，提高肌肤的含水量；并能促进细胞新陈代谢，有效细腻毛孔，改善粗糙。</p>
      <div class="price1">
        <span>￥</span>
        <span>1999.00</span>
      </div>
    </div>
    <div class="detailPro">
      <div
        v-for="(item,index) in tab"
        :key="index"
        @click="checkTab(index)"
        :class="curr==index?'activeTab':''"
      >{{item}}</div>
    </div>
   
      <div v-show="curr==index" v-for="(item,index) in proDetail" :key="index" class="detailPros">
        <div v-for="(item1,i) in item" :key="i" class="details">
          <img :src="item1.imgurl" />
        </div>
     
    </div>
    <div class="foot">
      <ul>
        <li>
          <img src="../assets/image/share.png" alt srcset />
          <p>分享</p>
        </li>
        <li>
          <img src="../assets/image/shoucang.png" alt srcset />
          <p>收藏</p>
        </li>
        <li>
          <img src="../assets/image/car.png" alt srcset />
          <p>购物车</p>
        </li>
      </ul>
      <div class="trial">试用</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "commoditydetails",
  data() {
    return {
      cur: 1,
      num: 1,
      total: 5,
      images: [
        require("../assets/image/swiper.png"),
        require("../assets/image/swiper.png"),
        require("../assets/image/swiper.png")
      ],
      tab: ["详情", "规格", "如何购买"],
      curr: 0,
      proDetail: [
        [{ imgurl: require("../assets/image/mian.png") }],
        [{ imgurl: require("../assets/image/swiper.png") }],
        [{ imgurl: require("../assets/image/mian.png") }]
      ]
    };
  },
  methods: {
    onChange(index) {
      this.num = index + 1;
      this.total = this.$refs.shu.length;
    },
    checkTab(index) {
      this.curr = index;
      console.log(index);
    }
  },
  beforeCreate() {},
  mounted() {
    this.total = this.$refs.shu.length;
  }
};
</script>
<style scoped>
.swiper_z {
  position: relative;
}
.change {
  font-size: 0.2rem;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0.41rem;
  left: 0;
  right: 0;
  z-index: 1000000;
  width: 2rem;
  justify-content: space-between;
  margin: 0 auto;
}
.change li {
  width: 0.84rem;
  height: 0.4rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  text-align: center;
  font-size: 0.2rem;
  line-height: 0.4rem;
  opacity: 0.8;
}
.pages {
  display: flex;
  font-size: 0.2rem;
  width: 0.84rem;
  height: 0.4rem;
  line-height: 0.4rem;
  /* opacity: 0.6; */
  background: #89898a;
  color: #ffffff;
  text-align: center;
  border-radius: 0.2rem;
  justify-content: center;
  position: absolute;
  bottom: 0.41rem;
  right: 0.3rem;
  z-index: 10000;
}
.video1 {
  width: 7.5rem;
  height: 6.33rem;
}
.video1 video {
  width: 100%;
  height: 100%;
}
/* .swipers {
} */
.swipers img {
  width: 7.5rem;
  height: 6.33rem;
}
.swipers /deep/ .van-swipe__indicator {
  display: none;
}
.active {
  background: #e4001a !important;
  color: #fff;
}
.produce {
  margin-top: 0.34rem;
  padding: 0 0.3rem;
}
.produce h2 {
  font-size: 0.36rem;
  margin-bottom: 0.26rem;
}
.produce p {
  color: #909193;
  font-size: 0.24rem;
}
.price1 {
  margin-top: 0.34rem;
  font-size: 0.3rem;
}
.price1 span {
  color: #e4001a;
}
.price1 span:nth-child(1) {
  font-size: 0.3rem;
}
.price1 span:nth-child(2) {
  font-size: 0.36rem !important;
  font-weight: bold;
}
.detailPro {
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0.26rem;
  font-size: 0.3rem;
  border-bottom: 1px solid #f0f0f0;

  color: #1c1c1c;
}
.detailPro div {
  padding: 0.2rem;
}
.activeTab {
  border-bottom: 1px solid #1f1f1e;
}
.detailPros {
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 0.2rem
}
.details {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 0.3rem;
}
.details img {
   width: 100%;
   box-sizing: border-box
  
}
/* 底部 */
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 1.06rem;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #efeff0;
}
.foot ul {
  display: flex;
  flex-direction: row;
  width: 3.3rem;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-left: 0.3rem;
  padding-right: 0.2rem;
  box-sizing: border-box;
}
.foot ul li {
  font-size: 0.24rem;
}
.foot ul li img {
  width: 0.4rem;
  height: 0.4rem;
  display: block;

  margin-left: 0.04rem;
  margin-bottom: 0.04rem;
}
.foot ul li:nth-child(3) img {
  margin-left: 0.08rem;
}
.foot div {
  font-size: 0.3rem;
  width: 2.1rem;
  line-height: 1.06rem;
  text-align: center;
}
.trial {
  background-color: #dbd6ca;
  color: #847651;
}
.buy {
  background-color: #b3995b;
  color: #fff;
}
</style>