import constant from './constant'
import util from './util'

//快捷键KyeCode [1-9]
const Shortcut = [97, 98, 99, 100, 101, 102, 103, 104, 105];
//别名快捷键
const aliasesKeyCode = [{
        keyCode: [81],
        val: "q"
    },
    {
        keyCode: [87],
        val: "w"
    },
    {
        keyCode: [69],
        val: "e"
    },
    {
        keyCode: [82],
        val: "r"
    },
    {
        keyCode: [84],
        val: "t"
    },
    {
        keyCode: [89],
        val: "y"
    },
    {
        keyCode: [85],
        val: "u"
    },
    {
        keyCode: [73],
        val: "i"
    },
    {
        keyCode: [79],
        val: "o"
    },
    {
        keyCode: [80],
        val: "p"
    },
    {
        keyCode: [65],
        val: "a"
    },
    {
        keyCode: [83],
        val: "s"
    },
    {
        keyCode: [68],
        val: "d"
    },
    {
        keyCode: [70],
        val: "f"
    },
    {
        keyCode: [71],
        val: "g"
    },
    {
        keyCode: [72],
        val: "h"
    },
    {
        keyCode: [74],
        val: "j"
    },
    {
        keyCode: [75],
        val: "k"
    },
    {
        keyCode: [76],
        val: "l"
    },
    {
        keyCode: [90],
        val: "z"
    },
    {
        keyCode: [88],
        val: "x"
    },
    {
        keyCode: [67],
        val: "c"
    },
    {
        keyCode: [86],
        val: "v"
    },
    {
        keyCode: [66],
        val: "b"
    },
    {
        keyCode: [78],
        val: "n"
    },
    {
        keyCode: [77],
        val: "m"
    }
];
//答案快捷键
const answerKeyCode = [{
        keyCode: [97],
        val: "1"
    },
    {
        keyCode: [98],
        val: "2"
    },
    {
        keyCode: [99],
        val: "3"
    },
    {
        keyCode: [100],
        val: "4"
    },
    {
        keyCode: [101],
        val: "5"
    },
    {
        keyCode: [102],
        val: "6"
    },
    {
        keyCode: [103],
        val: "7"
    },
    {
        keyCode: [104],
        val: "8"
    },
    {
        keyCode: [105],
        val: "9"
    }
];

//快果查询 常量定义
const kgcx_const = [{
        val: 'YES',
        name: '是'
    },
    {
        val: 'NO',
        name: '否'
    },
    {
        val: 'UNKNOWN',
        name: '未知'
    },
    {
        val: 'ACTIVE',
        name: '未过期'
    },
    {
        val: 'EXPIRED',
        name: '过期的'
    }
];

//ACTIVE，未过期；EXPIRED，过期；UNKNOWN，未知

const kgcx_idlock = [{
        val: 'OFF',
        name: '关闭',
        color: 'idlock-green'
    },
    {
        val: 'ON',
        name: '开启',
        color: 'idlock-red'
    },
    {
        val: 'UNKNOWN',
        name: '未知',
        color: ''
    }
];

export default {

    aliasesKeyCode: aliasesKeyCode,

    answerKeyCode: answerKeyCode,

    //获取业务类型
    formBusiness(id) {
        let str = '--';
        constant.BUSINESSTYPE.map(function (item) {
            if (item.id == parseInt(id, 10)) {
                str = item.name;
            }
        });
        return str;
    },

    //格式化选项数据，添加试图字段，答案项有快捷方式，层级
    formOptions(data) {
        if (Array.isArray(data) == false)
            return [];

        //select: 选中状态 , marking：标记状态（预选中）
        data.forEach(function (item, index) {

            item.select = index == 0;
            item.marking = index == 0;
            item.selectedStr = '';
            item.leval = 1;
            item.chooseType = 0; //选择者，0：检测员，1：第三方

            (item.item || []).forEach(function (answer, aIndex) {
                answer.select = false;
                answer.marking = false;
                let keyCode = '--',
                    keyStr = '--';
                if (answerKeyCode[aIndex] != null) {
                    keyCode = answerKeyCode[aIndex].keyCode[0];
                    keyStr = answerKeyCode[aIndex].val;
                }
                answer.keyCode = keyCode;
                answer.keyStr = keyStr;
                answer.leval = 2;

                (answer.item || []).forEach(function (desc, dIndex) {
                    desc.select = false;
                    desc.marking = false;
                    desc.leval = 3;
                    let keyCode = '--',
                        keyStr = '--';
                    if (aliasesKeyCode[dIndex] != null) {
                        keyCode = aliasesKeyCode[dIndex].keyCode[0];
                        keyStr = aliasesKeyCode[dIndex].val;
                    }
                    desc.keyCode = keyCode;
                    desc.keyStr = keyStr;
                });
            });
        });
        return data;
    },

    removeSession(key) {
        localStorage.removeItem(key);
        //sessionStorage.removeItem(key);
    },

    setSession(key, val) {
        localStorage.setItem(key, val);
        //sessionStorage.setItem(key, val);
    },

    getSession(key) {
        return localStorage.getItem(key);
        //return sessionStorage.getItem(key);
    },

    //设置用户所拥有的权限
    setLoginUserMenu(val) {
        this.setSession('menu', val);
    },

    //设置用户ID
    setLoginUserId(val) {
        this.setSession('user_id', val);
    },

    setFlags(val){
        console.log(val);
        this.setSession('flags', val);
    },

    //设置登陆用户信息
    setLoginUserInfo(val) {
        this.setSession('userInfo', val);
    },

    //设置用户登陆Token
    setLoginUserToken(val) {
        this.setSession('token', val);
    },

    //获取当前登陆用户id
    getUserId() {
        return this.getSession('user_id');
    },

    //获取当前登陆用户信息
    getUserInfo() {
        return JSON.parse(this.getSession('userInfo'));
    },

    //获取登陆用户令牌
    getToken() {
        return this.getSession('token');
    },

    formatDay(v) {
        if (v < 10) {
            return '0' + v;
        }
        return '' + v;
    },

    //获取N月之前的时间和当前时间
    getBeforeTime_Months(months) {

        let currentTime = new Date();
        let currentM = currentTime.getMonth();
        currentTime.setMonth(currentM - months);

        var df_startTime = currentTime,
            df_endTime = new Date();

        return [df_startTime, df_endTime];
    },


    getBeforeTime_Day(day){
        let endTime = new Date(),
            startTime = new Date(endTime.getTime() - (86400000 * day));

        return [startTime, endTime];
    },

    formKGCX(val) {
        let str = '';
        kgcx_const.forEach((item) => {
            str = item.val == val ? item.name : str;
        });
        return str;
    },

    formKGCX_IdLock(val) {
        let obj = {
            val: 'UNKNOWN',
            name: '未知',
            color: ''
        };
        kgcx_idlock.forEach((item) => {
            obj = item.val == val ? item : obj;
        });
        return obj;
    },

    getActivityType(val) {
        let str = '';
        constant.ACTIVITY_TYPE.forEach(item => {
            str = item.id == val ? item.name : str;
        });
        return str;
    },


    //促收活动奖项数据转换 ( 满加奖项自动选中，人工无法干预 )
    activitiesAwardsCos(cumulativeList, couponsList) {

        let regroupList = [],
            //主动加的（满加）
            activety = (cumulativeList || []).sort((a, b) => b.Fcoupon_money - a.Fcoupon_money),
            //可以选择的（优惠卷）
            selective = (couponsList || []).sort((a, b) => b.couponsValue - a.couponsValue);

        activety.map(function (item) {
            regroupList.push({
                id: item.Factivity_id || item.id,
                name: item.Factivity_name,
                desc: item.Factivity_des,
                money: util.formatMoney(parseInt(item.Fcoupon_money || item.couponMoney, 10)),
                //activityReward: item.Factivity_reward,
                expireDate: '',
                userCheck: true,
                isBan: false,
                type: 1
            })
        });

        selective.map(function (item) {
            regroupList.push({
                id: item.couponsId || item.id,
                name: item.couponName,
                desc: '',
                money: util.formatMoney(parseInt(item.couponsValue || item.couponMoney, 10)),
                expireDate: item.couponsValidity || '',
                userCheck: false,
                isBan: false,
                type: 2
            })
        });
        return regroupList;
    },

    secondFormat(val){
        let s = val % 60,
            m = Math.floor(val / 60 % 60),
            h = Math.floor(val / 60 / 60 % 24),
            d = Math.floor(val / 60 / 60 / 24);

        return d + '天' + h + '时' + m + '分';
    },

    domAtu(val){
        let data = JSON.parse( this.getSession('flags') );

        return data.indexOf(val);
    },

    //产品分类
    productClassify(data){
        let list = [];

        data.forEach(item => {
            let b = list.find(t => { return t.value == item.brandId }),
                p = {
                    value: item.productId, 
                    label: item.productName, 
                    classId: item.classId,brandId: 
                    item.brandId
                };

            if(b == null){
                list.push({ value: item.brandId, label: item.brandName, children:[p] });
            }else{
                b.children.push(p);
            }
        })
        
        return list;
    },
    setupCanvas(canvas) {
      // Get the device pixel ratio, falling back to 1.
      var dpr = window.devicePixelRatio || 1;
      // Get the size of the canvas in CSS pixels.
      var rect = canvas.getBoundingClientRect();
      // Give the canvas pixel dimensions of their CSS
      // size * the device pixel ratio.
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      var ctx = canvas.getContext('2d');
      // Scale all drawing operations by the dpr, so you
      // don't have to worry about the difference.
      ctx.scale(dpr, dpr);
      return ctx;
    }

    /*domAtu(vue, url){
        let data = JSON.parse( this.getSession('menu') );

        var fd = (list) => {
           let e = null;
           for(var i =0;i< list.length; i++){
                let item = list[i];
                if( item.access_flags == url ){
                    e = item.sub_menu;
                    break;
                }
           }
        
           if(e != null) return e;
           return fd(e.sub_menu);
       }

        let rs = fd(data);

        if(Array.isArray(rs)){
            rs = rs.filter( t => { return t.type == '1' } );

            rs.forEach(t => {
                let doms = document.getElementsByName(t.access_flags);

                if(doms.length > 0){
                    doms.forEach(dom => {
                        dom.style.display = "none";
                    })
                }
            })
        }
    }*/

}
