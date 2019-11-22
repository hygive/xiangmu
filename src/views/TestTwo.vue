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
      <div>
        <div class="first" v-for="(item,index) of datas" :key="index">
          <div v-if="item.type == 1" class="title">{{item.content}}</div>
          <myCheck
            v-if="item.type == 1"
            :options="item.options"
            :checkvalue="item.result"
            :id="item.body_id"
            :typename="2"
            @change="updataInpCheck"
          ></myCheck>
          <div v-if="item.type == 2" class="title">{{item.content}}</div>
          <myRadio
            :id="item.body_id"
            :typename="2"
            v-if="item.type == 2"
            :checkvalue="item.result"
            :options="item.options"
            :name="item.content"
            @change="updataVal"
          ></myRadio>

          <div v-if="item.type == 3" class="title">{{item.content}}</div>
          <div v-if="item.type == 3" class="check1">
            <textarea
              :placeholder="item.options"
              @input="textProposal2(item.body_id,$event,item.type)"
            >{{item.result}}</textarea>
          </div>

          <div v-if="item.type == 4" class="title">{{item.content}}</div>
          <div v-if="item.type == 4" class="check1">
            <textarea
              :placeholder="item.options"
              @input="textProposal2(item.body_id,$event,item.type)"
            >{{item.result}}</textarea>
          </div>
        </div>
      </div>
      <!-- <div class="first" v-for="(item,index) in listData" :key="index">
        <div class="title">{{item.title}}</div>
        <myRadio :options="item.options" :name="item.name" @change="updataVal"></myRadio>
      </div> 
      <div>
        <div class="first" v-for="(item,index) in questions" :key="index">
          <div class="title">{{item.content}}</div>
          <div class="check1">
            <textarea :placeholder="item.options"  @input="textProposal2(item.name,$event)"></textarea>
          </div>
        </div>
      </div>
      <div>
        <div class="first" v-for="(item,index) in proposal" :key="index">
          <div class="title">{{item.content}}</div>
          <div class="check1">
            <textarea :placeholder="item.options" @input="textProposal2(item.name,$event)" ></textarea>
          </div>
        </div>
      </div>-->
      <button class="next" @click="nextThree">下一步</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import myCheck from "../components/myCheck.vue";
import myRadio from "../components/myRadio.vue";
export default {
  name: "testtwo",
  components: {
    myRadio,
    myCheck
  },
  data() {
    return {
      // obj2:{},
      datas: [],
      value: {}, //选项value
      proposalVaule: "",
      listDataCheck: [
        {
          title: "您觉得皮肤存在哪些问题？（多选）",
          name: 0,
          options: ["干燥", "长痘痘", "色斑"]
        },
        {
          title: "您觉得皮肤存在哪些问题2？（多选）",
          name: 1,
          options: ["干燥", "长痘痘", "色斑"]
        }
      ],
      active0: -1,
      list1: ["每天都敷", "一周三次以上", "一周两次", "不敷"],
      listData: [
        {
          title: "您多久敷一次面膜？",
          name: 1,
          options: ["每天都敷", "一周三次以上", "一周两次", "不敷"]
        },
        {
          title: "您多久敷一次面膜2？",
          name: 2,
          options: ["每天都敷", "一周三次以上", "一周两次", "不敷"]
        },
        {
          title: "您多久敷一次面膜3？",
          name: 3,
          options: ["每天都敷", "一周三次以上", "一周两次", "不敷"]
        }
      ],
      questions: [{ content: "您还有什么问题吗？", options: "回答100个字" }],
      proposal: [
        { content: "您还有更好的提议吗", options: "例如：可以定制上门服务" }
      ]
    };
  },
  methods: {
    textProposal2(e, b, typename) {
      this.value[e] = {
        value: b.path[0].value,
        type: typename
      };
      // var b = b.path[0].value;
      // this.datas.map((item, i) => {
      //   if (item[0] == e) {
      //     item[1] = b;
      //     console.log(item);
      //     // item[1].push(this.proposalVaule)
      //   }
      // });
    },
    nextThree() {
      console.log(this.value);
      var rst = false;
      for (var i = 0; i < this.datas.length; i++) {
        if (!this.value[this.datas[i].body_id]) {
          rst = true;
        }
      }
      if (rst) {
        Toast("答案不能位空");
        return;
      }
      console.log(this.value);
      localStorage.setItem("OneObj2", JSON.stringify(this.value));
      this.$router.push({
        path: "/testtwo/testthree"
        // query:twoObj
      });
      // this.$router.push("/testtwo/testthree");
    },
    textProposal(option) {
      this.datas.map((item, i) => {
        if (item[0] == option.name) {
          console.log(this.proposalVaule);
          item[1].push(this.proposalVaule);
        }
        console.log(item[1]);
      });
      // console.log(this.proposalVaule)
    },

    //单选
    updataVal(option) {
      this.value[option.id] = {
        value: option.value,
        type: option.getAttribute("typename")
      };
      console.log(this.value);
    },
    //多选
    updataInpCheck(option) {
      var value = this.value[option.id] ? this.value[option.id]["value"] : [];
      if (value.length == 0) {
        value.push(option.value);
      } else {
        var sele = false;
        var index = 0;
        for (var i = 0; i < value.length; i++) {
          if (value[i] == option.value) {
            sele = true;
            index = i;
          }
        }
        if (sele) {
          value.splice(index, 1);
        } else {
          value.push(option.value);
        }
      }
      this.value[option.id] = {
        value: value,
        type: option.getAttribute("typename")
      };
      console.log(this.value);
      // console.log(this.value);
      // this.datas.map((item, i) => {
      //   // console.log('遍历数组');
      //   if (item[0] == option.name) {
      //     // console.log('找到数据');
      //     if (item[1].length > 0) {
      //       var boot = false;
      //       item[1].map((items, s) => {
      //         if (items == option.value) {
      //           boot = true;
      //           // console.log(s)
      //           // console.log(item[1])
      //           item[1].splice(s, 1);
      //           console.log("删除");
      //           console.log(item[1]);
      //         }
      //       });
      //       if (boot == false) {
      //         item[1].push(option.value);
      //         console.log("添加2");
      //         console.log(item[1]);
      //       }
      //     } else {
      //       console.log("添加1");
      //       item[1].push(option.value);
      //       console.log(item[1]);
      //     }
      //   }
      // });
      // console.log(option.name, option.value);
      // console.log(this.datas);
    },

    getInforQuestions() {
      this.$axios.post("/api/question/seek").then(res => {
        // console.log(res);
        let data = res.data.data;
        this.datas = data;
        console.log(data);
        var select = [];
        var selectCheck = [];
        var select3 = [];
        var proposal = [];

        this.datas.map((v, i) => {
          this.datas[i]["result"] = "";
        });
        //从缓存里拿数据
        var localObj = JSON.parse(localStorage.getItem("OneObj2"));
        if (localObj) {
          this.datas.map((v, i) => {
            this.datas[i]["result"] = localObj[v.body_id].value;
          });
          this.value = localObj;
        }
        console.log(this.datas);
        console.log(this.datas);
      });
    }
  },
  created() {
    this.getInforQuestions();
  },
  mounted() {
    console.log(this.$route.query);
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
.oneimg {
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
  margin: 0.6rem auto 0.6rem;
}

.first {
  margin-bottom: 0.2rem;
}
</style>
