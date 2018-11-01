<template>
    <div class="wrapper">
        <el-row :gutter="5">
            <el-col :span="8">
                <div class="grid-content bg-purple" >转账</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light" @click="goto('fundList')">基金</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">着</div>
            </el-col>
        </el-row>
        <el-row :gutter="5">
            <el-col :span="8">
                <div class="grid-content bg-purple">以</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">后</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">考</div>
            </el-col>
        </el-row>
        <el-row :gutter="5">
            <el-col :span="8">
                <div class="grid-content bg-purple">试</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">再</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">用</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    watch: {},
    computed: {},
    methods: {
        goto(path){
            this.$router.push({
                name : 'fundList'
            })
        }

    },
    created() {},
    mounted() {
        let width =
            document.body.clientWidth || document.documentElement.clientWidth;
        let gridList = document.querySelectorAll(".grid-content");
        gridList.forEach(element => {
            element.style.height = width / 3 + "px";
            element.style.lineHeight = width / 3 + "px";
        });
    }
};
</script>
<style  scoped>
.el-row {
    margin-bottom: 5px;
}
.grid-content {
    background: #50baac;
    color: #fff;
    font-size: 1rem;
    box-shadow: 1px 1px #000;
    text-align: center;
    font-size: 1.2rem;
}
</style>