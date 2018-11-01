<template>
    <div class="wrapper">
        <nav-bar title="基金购买"></nav-bar>
        <div class="bg">
            <div>
                <img src="../../assets/img/success.png">
            </div>
            <div class="text">交易流水号：{{transId}}</div>
        </div>
        <div style="display:flex;justify-content:center;">
            <ui-button class="large" type="primary" @click="finish()">完成</ui-button>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import {Button} from 'mand-mobile'
export default {
    components: {
        NavBar,
        [Button.name]: Button,
    },
    props: {},
    data() {
        return {
            transId:""
        };
    },
    watch: {},
    computed: {},
    methods: {
         finish() {
      this.$router.push({ path: "/" });
     
      },
       goBack(){
          this.$router.go(-2);
    },
    },
    created() {
        const self = this;
         self.transId = this.$route.params.transId;
    },
    mounted() {
       
    }
};
</script>
<style scoped>
.bg {
    background: #fff;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-bottom:22px;
}
.wrap{
    height: 50px;
    line-height: 50px;
    padding:0 8px;
    width: 100%;   
    display: flex;
    background: #666;
    color: #fff;
    justify-content:space-between ;
    margin-bottom: 22px;
}
.text{
    font-size: 33px;
}
</style>