<template>
  <div class="home">
    <div class="top">
      <div
        class
        v-for="(item,index) in topList"
        :key="index"
        @click="selcet(index)"
        :class="{active:curr==index}"
      >
        <img :src="item.tp1" alt v-if="curr==index" />
        <img :src="item.tp2" alt v-else />
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="contaniner">
      <div v-for="(item1,index) in topListCont" :key="index" v-show="curr==index" class="one">
        <div v-for="(item2,index1) in item1" :key="index1" class="one_cont" @click="jumpdetails(index)">
          <div class="con-left">
            <img :src="item2.img" />
          </div>
          <div class="con-right">
            <h2 class="world1">{{item2.title}}</h2>
            <div class="produce world">{{item2.cont}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { request } from "http";
export default {
  name: "application",
  data() {
    return {
      curr: 0,
      topList: [
        {
          tp1: require("../assets/image/app1.png"),
          tp2: require("../assets/image/app1-1.png"),
          name: "解决方案"
        },
        {
          tp1: require("../assets/image/app2.png"),
          tp2: require("../assets/image/app2-2.png"),
          name: "护肤品"
        },
        {
          tp1: require("../assets/image/app3.png"),
          tp2: require("../assets/image/app3-3.png"),
          name: "美容设备"
        }
      ],
      topListCont: [
        [
          {
            img: require("../assets/image/pro.png"),
            title: "两周水光焕肤试用装",
            cont:
              "GLAMGLOW格莱魅的净化白罐主打深层清洁，性质温和，建议产品使用完后按照正常的护肤流程就可..."
          },
          {
            img: require("../assets/image/pro.png"),
            title: "两周水光焕肤试用装",
            cont:
              "GLAMGLOW格莱魅的净化白罐主打深层清洁，性质温和，建议产品使用完后按照正常的护肤流程就可..."
          }
        ],

        [
          {
            img: require("../assets/image/pro.png"),
            title: "两周水光焕肤试用装1",
            cont:
              "GLAMGLOW格莱魅的净化白罐主打深层清洁，性质温和，建议产品使用完后按照正常的护肤流程就可..."
          }
        ]
      ]
    };
  },
  methods: {
    selcet(index) {
      this.curr = index;
      // getShopList
    },

    jumpdetails() {
      this.$router.push("/application/commoditydetails");
    }
  },
  mounted() {}
};
</script>
<style scoped>
.home {
  background: #f3f3f3;
  min-height: 100vh;
  padding: 0 0.3rem;
  padding-top: 0.4rem;
}
.top {
  /* padding-top: 0.4rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f8f8f8;
}
.top div {
  width: 33.333%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0;
  border-right: 1px solid #e9e9e9;
}
.top div span {
  margin-top: 0.19rem;
  color: #909193;
}
.top div:nth-child(1) img {
  width: 0.42rem;
  height: 0.53rem;
  display: block;
}
.top div:nth-child(2) img {
  width: 0.46rem;
  height: 0.53rem;
  display: block;
}
.top div:nth-child(3) img {
  width: 0.5rem;
  height: 0.53rem;
  display: block;
}
.top span {
  font-size: 0.26rem;
  display: block;
}
.active {
  background: #fff;
  border-top: 2px solid #ae965b;
  border-right: 0 !important;
}
.active span {
  color: #ae965b !important;
}
.contaniner {
  background: #fff;
}
.one_cont {
  padding: 0.52rem 0rem;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
}
.one_cont {
  margin: 0 0.28rem;
}
.con-right {
  margin-left: 0.3rem;
}
.one_cont img {
  width: 1.84rem;
  height: 1.84rem;
  display: block;
}
.one_cont h2 {
  font-size: 0.3rem;
  color: #1c1c1c;
  margin-bottom: 0.29rem;
}
.one_cont div {
  color: #909193;
  font-size: 0.24rem;
}
.world {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.world1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>