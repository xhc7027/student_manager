export default {

    //分页 页大小
    PAGESIZE: 15,

    //当前系统标识符
    CURRENT_SYSTEM_ID: 24,

    //自定义机型所属品牌, 现网：37，测试环境：32
    UNKNOWN_BRANDS: "37",

    //山寨机
    //线上环境: 41636
    //测试环境: 41636
    //开发环境: 35016
    EMULATIONALPHONE: ["37", "41636"],

    //订单状态
    ORDERSTATUS: {
        //待检测
        NO_DETECT: 40
    },

    //BIT类型
    BIT: {
        FALSE: 0,
        TRUE: 1
    },

    //接口结果转换
    RES_ARRAY: [
        { retcode: '0', status: true, retinfo: '正确' }
    ],

    //请求头
    paramsHead: {
        msgtype: "request",
        remark: "",
        version: "0.01"
    },

    //订单扭转--订单状态
    orderStatus: [
        { id: '40', name: '待检测' },
        { id: '100', name: '待议价' },
        { id: '90', name: '待退货' },
        { id: '110', name: '已退货' },
        { id: '60', name: '待付款' },
        { id: '84', name: '待拒签' },
        { id: '10', name: '已下单' },
    ],

    //业务类型
    BUSINESSTYPE: [{
        id: 1,
        name: '2C'
    }, {
        id: 2,
        name: '2B'
    }],

    //自动议价规则--状态
    ruleStatus: [
        { id: 1, name: '开启' },
        { id: 0, name: '关闭' },
    ],
    //是否需要估价
    NEED_EVALUATE: {
        //0表示需要
        Y: 0,
        //1表示不需要,使用最低价'
        N: 1
    },

    //客服分配订单规则类型
    ALLOTMENTTYPE: [{
        id: 1,
        name: '网点名称'
    }, {
        id: 2,
        name: '检测问题项'
    }],

    //客服分配订单规则状态
    ALLOTMENT_STATUS: [
        { id: 1, name: '开启' },
        { id: 2, name: '关闭' },
    ],

    //客服分配渠道列表
    CHANNELLIST: [{
        id: "88888888",
        name: '全部（除微回收、转转、上门回收、闪修侠）'
    }, {
        id: "10000044",
        name: '2C 腾讯微回收平台'
    }, {
        id: "10000068",
        name: '闲鱼平台'
    }, {
        id: "10000135",
        name: '闲鱼信用速卖'
    }, {
        id: "10000034",
        name: '2C 58回收-转转优品'
    }, {
        id: "40000001",
        name: '回收宝主站'
    }, {
        id: "20000001",
        name: '华为商城'
    }, {
        id: "10000121",
        name: 'vivo'
    }],

    CHANNELLISTHUOMIAN: [
        { name: '2C 腾讯微回收平台', id: "10000044" },
        { name: '闲鱼平台',  id: "10000068" },
        { name: '闲鱼信用速卖', id: "10000135" },
        { name: '2C 58回收-转转优品',  id: "10000034" },
        { name: '回收宝主站',  id: "40000001" },
        { name: '华为商城',  id: "20000001" },
        { name: 'vivo', id: "10000121", },
        { name: '分期乐', id: "10000137" },
        { name: '闲鱼(支付宝) APP', id: "10000143" },
        { name: '闲鱼(天猫) APP',id: "10000142" },
        { name: '闲鱼(淘宝) APP', id: "10000141" },
        { name: '闲鱼(优酷) APP', id: "10000151" },
        { name: '天猫以旧换新', id: "10000155" },
        { name: '魅族生活App', id: "10000144" },
        { name: "H5回收宝", id: "30000001"},
        { name: "2C百度竞价", id: "10000011"},
        { name: "微信公众号2", id: "10000012"},
        { name: "微信公众号活动", id: "10000001"},
        { name: "2C今日头条", id: "10000039"},
        { name: "2C神马竞价", id: "10000040"},
        { name: "官方微博", id: "10000056"},
        { name: "360", id: "10000057"},
        { name: "搜狗", id: "10000058"},
        { name: "回收宝APP-2C", id: "10000060"},
        { name: "2C回收宝APP-iOS", id: "10000079"},
        { name: "2C广点通2", id: "10000083"},
        { name: "支付宝", id: "10000084"},
        { name: "2C付费", id: "10000103"},
        { name: "资讯站 zx.huishoubao.com", id: "10000118"},
        { name: "竞价平台", id: "10000128"},
        { name: "换机侠", id: "10000140"},
        { name: "租机网", id: "10000146"},
        { name: "付费营销渠道", id: "10000147"},
        { name: "OPPO", id: "10000148"}
    ],

    OPTIONEXEMPTCHANNEL:[
        { name: '2C 腾讯微回收平台', id: "10000044" },
        { name: '回收宝主站',  id: "40000001" }
    ],

    // 2C订单状态
    ORDERSTATUS2C: [
        { "id": 10, "name": "已下单" },
        { "id": 14, "name": "已微信预付" },
        { "id": 20, "name": "已发货" },
        //{ "id": 265, "name": "待收货" },   // 父级状态 20
        //{ "id": 27, "name": "异地待收货" },  // 父级状态 20
        { "id": 24, "name": "顺丰上门" },
        { "id": 28, "name": "工程师接单" },
        //{ "id": 210, "name": "工程师已接单" }, // 父级状态 28
        { "id": 40, "name": "待检测" },
        { "id": 42, "name": "工程师已上门" },
        //{ "id": 220, "name": "已上门" }, // 父级状态 42
        { "id": 50, "name": "检测中" },
        { "id": 52, "name": "已检测" },
        { "id": 56, "name": "待清除数据" },
        //{ "id": 240, "name": "待清除数据" }, // 父级状态 56
        { "id": 60, "name": "待付款" },
        { "id": 70, "name": "已付款" },
        { "id": 78, "name": "取消中" },
        { "id": 80, "name": "已取消" },
        { "id": 84, "name": "待拒签" },
        { "id": 90, "name": "待退货" },
        { "id": 100, "name": "议价中" },
        { "id": 101, "name": "待发送报告" },
        { "id": 102, "name": "待用户反馈" },
        { "id": 110, "name": "已退货" },
        { "id": 120, "name": "已确认退货" },
        { "id": 130, "name": "已确认收款" },
        { "id": 250, "name": "已检测 - 上门" },
        { "id": 255, "name": "待支付 - 上门" },
        { "id": 260, "name": "已付款 - 上门" },

        /*
        { "id": 16, "name": "待派单" },
        { "id": 126, "name": "已提前结单" },
        { "id": 245, "name": "待审批" },
        { "id": 12, "name": "已派单" },
        { "id": 42, "name": "已上门" },
        { "id": 270, "name": "异地待收货" },
        { "id": 230, "name": "待用户确认" },
        //{ "id": 60, "name": "已议价" },
        { "id": 62, "name": "已申请付款" },
        { "id": 15, "name": "合作商垫付" },
        { "id": 50, "name": "检测中" },
        { "id": 86, "name": "确认收货" },
        { "id": 30, "name": "已入库" },
        { "id": 55, "name": "质报同步中" },
        { "id": 105, "name": "待客服回访" },
        { "id": 124, "name": "交易失败" },
        { "id": 140, "name": "已评价" },
        { "id": 150, "name": "已出库" },
        { "id": 200, "name": "待派单" },
        { "id": 300, "name": "已入库" },
        { "id": 310, "name": "已出库" },
        { "id": 320, "name": "已销售" }
        */
    ],
    //自动发送质检报告检测选项选择(正常选项)
    DETECTOPTION_NORMAL: [{
        id: "846",
        name: '外观完好'
    }, {
        id: "20",
        name: '全新(整套/未激活/未使用)'
    }],

    //自动发送质检报告检测选项选择(异常选项)
    DETECTOPTION_ERROR: [{
        id: "82",
        name: 'iCloud无法注销'
    }, {
        id: "8",
        name: 'ID/账户锁无法解除'
    }, {
        id: "24",
        name: '不能正常开机'
    }],

    HostUrl: 'http://127.0.0.1:8008',

    //检测可视化 视屏配置路径
    VIDEO_URL: '10.0.30.71', // 10.0.30.71：测试环境，10.0.50.35：正式环境

    //下载服务器文件目录
    uploadExcelAPI: '/privilege/importDutyData',

    DIS_NUM: 10,

    //客服管理员
    ADMIN_NO: [2, 356,1005,1006,1007,1008,1009,449,516],

    //开启视屏的PID
    /*
        视屏录制配置
        ChannelID: 渠道ID
        Type: 1:只录制视屏, 2:只开放截屏, 3: 录制视屏&&开放截屏

        10000060	回收宝APP-2C
        40000001	回收宝主站
        30000001	H5回收宝
        10000012	微信公众号2
        10000135	闲鱼信用速卖
        10000084	支付宝

        闲鱼2.0: 1365 只开放截屏功能
    */
    OPEN_VIDEO_PID: [
        { ChannelID: 10000060, Type: 1 }, { ChannelID: 40000001, Type: 1 }, { ChannelID: 30000001, Type: 1 },
        { ChannelID: 10000012, Type: 1 }, { ChannelID: 10000084, Type: 1 }, { ChannelID: 10000135, Type: 2 }
    ],

    //开启第三方信息查询的品牌 (11,旧品牌的苹果，2，新品牌的苹果)
    OPEN_THIRDPARTY_BRAND: [2],
    OPEN_THIRDPARTY_BRAND_OLD: [11],

    //客服部门ID,线上：61 ， 测试:54
    KEFU_DEPARTMENT_ID: 61,

    //活动类型 activity
    ACTIVITY_TYPE: [{
        id: 1,
        name: '满加'
    }, {
        id: 2,
        name: '优惠卷'
    }],

    RECEIVE_NOT_EDIT:['10000155'],

    //启动云拍卖模式的渠道
    AUCTION_CHANNEL:['10000163'],

    //回收宝所承担运费(分)
    FREIGHT: 2200,

    //运费承担方
    FREIGHT_PAY:{
        HSB: 1,
        USER: 2
    }
}
