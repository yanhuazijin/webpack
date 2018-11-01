<template>
    <div class="wrapper" >
        <nav-bar title="基金产品"></nav-bar>
        <el-col :span="24"   >
            <el-card shadow="hover" v-for="item in fundList" :key="item.fundId">
                <div class="flex" >
                    <div class="info">
                        <div class="income" >
                            {{item.fundIncome}}
                        </div>
                        <div class="depict" >
                            七日年化收益
                        </div>
                    </div>
                    <h4 >{{item.fundIncome}}</h4>
                    <img :src="arrowImg" alt="箭头" srcset="" @click="fundBuy(item.fundId)">
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import {Button, Radio, Field, FieldItem, InputItem, Switch, Cashier, Toast} from 'vx-mobile'
export default {
    components: {
    NavBar,
    [Button.name]: Button,
    [Radio.name]: Radio,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Switch.name]: Switch,
    [Cashier.name]: Cashier,
    },
    props: {},
    data() {
        return {
            arrowImg :require("@/assets/img/arrow.png"),
            fundList:[],
        };
    },
    watch: {},
    computed: {},
    methods: {
        fundBuy(fundId){
            var params={
                'fundId':fundId
            }
            this.$router.push({name:'fundBuy',params:params});
            console.log(fundId);
        }
    },
    created() {
        const self=this;
        this.$remote
        .post('/local/fundList.do')
        .then(function(response){
            if(response.data.success){
                    self.fundList=response.data.fundList;
                    
            }
        })
    },
};
</script>
<style  scoped>
.el-col{
    margin-bottom:1rem;
}
.flex{
    display: flex;
    align-items:center;
    justify-content:space-between;
    font-size: 0.35rem;
}
.flex img{
    width:32px;
    height: 32px;
}
.info{
    width: 40%;
}

.income{
    font-size: 0.45rem;
    color: red;
    padding:.5rem;
    margin-top:-23px;
}
.depict{
    color:#afafaf;
    margin-top:-43px;
}
</style>