<template>
     <el-button type="primary" class="countbtn" :disabled="isDisabled" @click="getToken">{{text}}</el-button>
</template>

<script>
export default {
  components:{},
  props:{
    countNum :{
      type : Number,
      default:60
    }
  },
  data(){
    return {
      text : "获取",
      count : this.countNum,
      isDisabled : false
    }
  },
  watch:{},
  
  methods:{
    getToken(){
      const self = this;
      this.$remote.post("/local/getToken.do").then(function(response){
          self.isDisabled = true;
          alert("短信验证码 ： " + response.data.token);
          const  ts = setInterval(() => {
            self.text = self.count + "秒";
            self.count -- ;
            if(self.count < 0){
                clearInterval(ts);
                self.text = "获取";
                self.isDisabled = false;
            }
          }, 1000);
      })
    }
  },
  created(){},
  mounted(){}
}
</script>
<style  scoped>
.countbtn{
    margin: 0 0.15rem;
    width: 1.94rem;
    height: 0.73rem;
    line-height: 0.23rem;
    border-radius: 0.32rem;
    font-size: 0.34rem;
    margin-top: 0.08rem;
}
</style>