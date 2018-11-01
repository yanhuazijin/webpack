<template>
    <div class="wrapper">
        <nav-bar title="基金购买"></nav-bar>
        <ui-tag class="tag"  shape="fillet" type="fill" fill-color="#409EFF" font-weight="bolder" font-color="#fff">产品信息</ui-tag>
        <ui-field>
            <!-- <div class="zone" id="zone"> -->
                <ui-field-item title="剩&nbsp;&nbsp;&nbsp;&nbsp;余&nbsp;&nbsp;&nbsp;&nbsp;额&nbsp;&nbsp;&nbsp;&nbsp;度&nbsp;&nbsp;">
                    <div class="con_text">{{fundDetail.surplusAmount}}</div>
                </ui-field-item>
                <ui-field-item title="追加最低投资金额">
                    <div class="con_text">{{fundDetail.minAddAmount}}</div>
                </ui-field-item>
                <ui-field-item title="单笔最低购买金额">
                    <div class="con_text">{{fundDetail.minBuyAmount}}</div>
                </ui-field-item>
                <ui-field-item title="追加最高投资金额">
                    <div class="con_text">{{fundDetail.maxBuyAmount}}</div>
                </ui-field-item>
            <!-- </div> -->
        </ui-field>
        <ui-tag>付款信息</ui-tag>
        <ui-field label-width="90px" :model="ruleForm" :rules="rules" ref="ruleForm" >
            <div class="zone">
                <ui-field-item title="理财账户" prop="accout" >
                	<select  v-model="ruleForm.accout"  style="width: 100%;height:35px;font-size:16px;margin-left: 15px;">
                        <option v-for="it in Counts" :key="it.id" :label="it.userName" :value="it.contNo"></option>
                    </select>
                </ui-field-item>
                <ui-field-item title="购买金额" prop="amount" >
                    <ui-input-item v-model="ruleForm.amount" placeholder="购买金额" ></ui-input-item>
                </ui-field-item>
                <ui-field-item title="验&nbsp;&nbsp;证&nbsp;码" class="noborder" prop="tokenName">
                    <ui-input-item class="tokenInp " placeholder="验证码"   v-model="ruleForm.tokenName" maxlength="6"></ui-input-item>
                    <countdown :countNum="30"></countdown>
                </ui-field-item>
                <ui-field-item title="推荐人工号" prop="cardNo">
                    <ui-input-item placeholder="可不填"   v-model="ruleForm.cardNo"></ui-input-item>
                </ui-field-item>
            </div>
        </ui-field>
        <div style="display:flex;justify-content:center;margin-top: 20px;">
                <ui-button class="large" type="primary" @click="fundRes('ruleForm')">下一步</ui-button>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import Countdown from "../../components/Countdown.vue";
import { InputItem, Field, Button, FieldItem } from "mand-mobile";
export default {
  components: {
    NavBar,
    Countdown,
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [Button.name]: Button
  },
  props: {},
  data() {
    return {
      transId: {},
      fundId: "",
      fundDetail: {},
      Counts: [{}],
      rules: {
     
      },
      ruleForm: {
        countNo: "",
        accout: "",
        tokenName: "",
        cardNo: "",
        amount: ""
      },
      countNum: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    fundRes(formName) {
      // 验证
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      const self = this;
      console.log(this.ruleForm);
      this.$remote
        .post("/local/buyFund.do", {
          fundId: self.fundId,
          countNo: self.ruleForm.accout,
          amount: self.ruleForm.amount,
          tokenName: self.ruleForm.tokenName
        })
        .then(function(response) {
          console.log(response);

          if (response.data.success) {
            self.transId = response.data;
            console.log(response);
            //    console.log(self.transId);
            console.log(self.transId.transId);
            var params = {
              transId: self.transId.transId
            };
            console.log(params);
            self.$router.push({
              name: "fundRes",
              params: params
            });
          }
        });

      //     } else {
      //       return false;
      //     }
      //   }
      //   );
    }
  },
  created() {

    const self = this;    
    self.fundId = this.$route.params.fundId;
 
    this.$remote
      .post("/local/fundDetail.do", {
        fundId: self.fundId
      })
      .then(function(response) {
        // console.log(response);

        if (response.data.success) {
          self.fundDetail = response.data;
          // console.log(self.fundDetail);
        }
      });
    this.$remote.post("/local/myCounts.do").then(function(response) {
      //   console.log(response);
      if (response.data.success) {
        self.Counts = response.data.myCounts;
            self.ruleForm.accout = self.Counts[0].contNo;   
        // console.log(self.Counts[0].userName);
        // console.log(self.ruleForm.accout);
      }
    });
    
  }
  
};
</script>
<style scoped>
.md-tag{
	
    margin-top:-100px;
	padding:50px;	
}
.con_text {
  text-align: right;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 3.1rem;
}

</style>


