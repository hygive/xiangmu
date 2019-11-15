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
        <div class="first" v-for="(item,index) of listDataCheck" :key="index">
          <div class="title">{{item.title}}</div>
          <myCheck :options="item.options" :name="item.name" @change="updataInpCheck"></myCheck>
        </div>
      </div>
      <div class="first" v-for="(item,index) in listData" :key="index">
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
      </div>
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
      proposalVaule:"",
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
    textProposal2(e,b){
      var b=b.path[0].value
       this.datas.map((item, i) => {
         if(item[0] == e) {
            item[1]=b
           console.log(item)
          // item[1].push(this.proposalVaule)
         }
       })
    },
    nextThree() {
      // console.log({name}=this.$route.query)
      var obj1=this.$route.query
      var obj2={two:this.datas}
    // console.log(obj2)
    var twoObj=Object.assign(obj1,obj2)
    console.log(twoObj)
      // console.log(this.datas)
      this.datas.map((item,i)=>{
        if(item[1]==""){
          Toast("答案不能位空"); 
        }else{
             
              
             this.$router.push({
                path:"/testtwo/testthree",
                query:twoObj
                
             })
        }
      })
      // this.$router.push("/testtwo/testthree");
    },
    textProposal(option,){
       this.datas.map((item, i) => {
         if(item[0] == option.name) {
           console.log(this.proposalVaule)
           item[1].push(this.proposalVaule)
         }
         console.log(item[1])
       })
    // console.log(this.proposalVaule)  
    },   
     
    //单选
    updataVal(option) {
      this.datas.map((item, i) => {
        if (item[0] == option.name) {
          //  if(item[1].length ==0){
          //     item[1].push(option.value)
          //  }else if(item[1].length>0){
          //    item[1]=[];
          //    console.log(item[1])
          //    item[1].push(option.value)
          //   
          //  }
           item[1]=[option.value]
             console.log(item[1]);
             console.log(this.datas)
        }
      });
    // console.log(option)
    },
    //多选
    updataInpCheck(option) {
      this.datas.map((item, i) => {
        // console.log('遍历数组');
        if (item[0] == option.name) {
          // console.log('找到数据');
          if (item[1].length > 0) {
            var boot = false;
            item[1].map((items, s) => {
              if (items == option.value) {
                boot = true;
                // console.log(s)
                // console.log(item[1])
                item[1].splice(s, 1);
                console.log("删除");
                console.log(item[1]);
              }
            });
            if (boot == false) {
              item[1].push(option.value);
              console.log("添加2");
              console.log(item[1]);
            }
          } else {
            console.log("添加1");
            item[1].push(option.value);
            console.log(item[1]);
          }
        }
      });
      console.log(option.name, option.value);
      console.log(this.datas);
    },

    getInforQuestions() {
      this.$axios.post("/api/question/seek").then(res => {
        // console.log(res);
        let data = res.data.data;
        console.log(data);
        var select = [];
        var selectCheck = [];
        var select3 = [];
        var proposal = [];
        data.map((item, i, arry) => {
          var abc = [data[i].body_id, []];
          this.datas.push(abc);

          if (data[i].type === "1") {
            return select.push(data[i]);
          } else if (data[i].type === "2") {
            return selectCheck.push(data[i]);
          } else if (data[i].type === "3") {
            return select3.push(data[i]);
          } else {
            return proposal.push(data[i]);
          }
        });
        console.log(this.datas);
        // console.log(selectCheck);
        // console.log(select3);
        // console.log(proposal);
        //多选
        this.listDataCheck = selectCheck;
        this.listDataCheck.map((item, i) => {
          // console.log(i);
          this.listDataCheck[i].title = selectCheck[i].content;
          this.listDataCheck[i].name = selectCheck[i].body_id;
        });
        //单选
        this.listData = select;
        this.listData.map((item, i) => {
          // console.log(i);
          this.listData[i].title = select[i].content;
          this.listData[i].name = select[i].body_id;
        });

        //提议
        this.proposal = proposal;
        this.listData.map((item, i) => {
          // console.log(i);
          this.proposal[i].content = proposal[i].content;
          this.proposal[i].name = proposal[i].body_id;
        });
        //问答题
        this.questions = select3;
        this.listData.map((item, i) => {
          // console.log(i);
          this.questions[i].content = select3[i].content;
          this.questions[i].name = select3[i].body_id;
        });
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
