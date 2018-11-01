// 引入mockjs
const Mock = require("mockjs");
// 获取 mock.Random 对象
const Random = Mock.Random;

// 查询所有的基金
const fundList = function() {
    return Mock.mock({
        success: true,
        "fundList|4-8": [
            {
                fundId: "CSII" + "@natural(1000000,9999999)",
                "fundName|1": "@ctitle(6, 10)",
                "fundIncome|1": "@float(3,6,2,2)"
            }
        ]
    });
};

// 查询基金详情
const fundDetail = function(request) {
    let fundId = JSON.parse(request.body).fundId;
    if (fundId && fundId.indexOf("CSII") > -1) {
        return Mock.mock({
            success: true,
            surplusAmount: "@natural(400000,499999)",
            minAddAmount: 100,
            minBuyAmount: 100,
            maxBuyAmount: 10000
        });
    } else {
        return Mock.mock({
            success: false,
            JSONError: "未上送字段fundId"
        });
    }
};

// 我的账户
const myCounts = function() {
    return Mock.mock({
        success: true,
        myCounts: [
            {
                contNo: "6228 3700 1111 1111",
                userName: "科蓝一号",
                id: "001"
            },
            {
                contNo: "6228 3700 2222 2222",
                userName: "科蓝二号",
                id: "002"
            },
            {
                contNo: "6228 3700 3333 3333",
                userName: "科蓝三号",
                id: "003"
            }
        ]
    });
};

// 短信验证码
const getToken = function(request) {
    return Mock.mock({
        success: true,
        token: "@integer(000000,999999)"
    });
};

// 购买基金
const buyFund = function(request) {
    let requestObj = JSON.parse(request.body);
    if (!requestObj.fundId) {
        return Mock.mock({
            success: false,
            JSONError: "缺少fundId字段"
        });
    } else if (!requestObj.countNo) {
        return Mock.mock({
            success: false,
            JSONError: "缺少countNo字段"
        });
    } else if (!requestObj.amount) {
        return Mock.mock({
            success: false,
            JSONError: "缺少countNo字段"
        });
    } else if (!requestObj.tokenName) {
        return Mock.mock({
            success: false,
            JSONError: "缺少tokenName字段"
        });
    }else{
        return Mock.mock({
            success: true,
            transId: "CSII" + "@integer(00000000,99999999)"
        });
    }
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock("/local/fundList.do", "post", fundList);
Mock.mock("/local/fundDetail.do", "post", fundDetail);
Mock.mock("/local/myCounts.do", "post", myCounts);
Mock.mock("/local/getToken.do", "post", getToken);
Mock.mock("/local/buyFund.do", "post", buyFund);
