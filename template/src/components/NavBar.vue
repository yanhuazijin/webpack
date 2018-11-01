<!-- 顶部导航条 -->
<template>
  <nav class="wrapper">
      <div class="backbtn" @click="goBack">
          <i class="el-icon-arrow-left"></i>
         <span icon="el-icon-search"> {{leftContext}}</span>
      </div>

      <div class="title">
          {{title}}
      </div>

      <div>
          {{rightContext}}
      </div>
  </nav>
</template>

<script>
export default {
  components:{},
  props:{
      rightContext : {
          type : String,
          default  : ""
      },
      leftContext : {
          type : String,
          default : "返回"
      },

      title : {
          type : String,
          default : "标题"
      }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  },
  created(){},
  mounted(){}
}
</script>
<style  scoped>
.wrapper{
    height: 110px;
    line-height: 110px;
    padding:0 8px;
    width: 100%;   
    display: flex;
    background: #409EFF;
    color: white;
    justify-content:space-between ;
    margin-bottom: 22px;
    font-size: 32px;
}
.title{
    margin-right:50px;
}
</style>