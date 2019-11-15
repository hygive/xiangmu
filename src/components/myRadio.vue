<template>
  <div class="hello">
    <p v-for="(item,index) of options" :key="index" class="test">
      <label class="myRadio">
        <input type="radio"  :value="item" :name="name"  @change="updataInp"/>
        <span>{{item}}</span>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: "my-radio",
  model:{
   prop:"options",
    event:"updataInp"
  },
  props: {
    options:{
      type:Array,
      required:true
    },
    name:{
      type:[Number,String],
       required:true
    }
  },
  data() {
    return {
       
    };
  },

  methods:{
    updataInp (ev) {
    //  console.log(ev.target.value)
      this.$emit('change', ev.target)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* radio */
.test {
  height: 100%;
  background: #f3f7f8;
  color: #c1c1c1;
  height: 0.8rem;
}
.myRadio {
  width: 100%;
  color: #c1c1c1;
  margin-bottom: 0.2rem;
  display: block;
  cursor: pointer;
  margin-top: 0.16rem;
}
.myRadio input[type="radio"] {
  outline: none;
  display: none;
}
.myRadio input[type="radio"] + span {
  color: black;
  display: block;
  width: 100%;
  height: 0.8rem;
  background: #ffffff;
  border-radius: 0.103rem;
  /* box-shadow: 3px 5px 4px 0 rgba(189, 188, 188, 0.36); */
  font-size: 0.35rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  color: #c1c1c1;
  border: 1px solid #c1c1c1;
  text-align: center;
  font-size: 0.26rem;
}
.myRadio input[type="radio"]:checked + span {
  background-color: #9f8a59;
  color: white;
  font-size: 0.26rem;
}

p {
  font-size: 0.2rem;
}
</style>
