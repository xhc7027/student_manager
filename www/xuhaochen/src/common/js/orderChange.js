// 订单扭转配置文件
export const reverseStatus = [{
    conditions: {
        and: {
            //2C渠道
            channeltype: "1",
            status: [40, 100, 90, 110, 60, 84, 10]
        }
    },
    data: [{
        id: '40',
        name: "待检测",
        updateStatus: [
            { id: '10', name: '已下单', opertype: 7, userRole: '100#200#300' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '100', //议价中
        name: '待议价',
        updateStatus: [
            { id: '40', name: '待检测', opertype: 6, userRole: '100#200#300' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '90',
        name: '待退货',
        updateStatus: [
            { id: '100', name: '待议价', opertype: 2, userRole: '100#200' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '110',
        name: '已退货',
        updateStatus: [
            { id: '100', name: '待议价', opertype: 8, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '60',
        name: '待付款',
        updateStatus: [
            { id: '40', name: '待检测', opertype: 5, userRole: '100#200#300' },
            { id: '100', name: '待议价', opertype: 1, userRole: '100#200' },
            { id: '70', name: '已付款', opertype: 9, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '84',
        name: '待拒签',
        updateStatus: [
            { id: '100', name: '待议价', opertype: 3, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '10',
        name: '已下单',
        updateStatus: [
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }]
}, {
    conditions: {
        // 2b，大B，小B
        and: {
            channeltype: [2, 4, 8],
            status: [40, 80, 130, 100, 90, 60, 10, 84]
        }
    },
    data: [{
        id: '130',
        name: '已确认收款',
        updateStatus: [
            { id: '40', name: '待检测', opertype: 10, userRole: '100' },
            { id: '100', name: '待议价', opertype: 11, userRole: '100' }
        ]
    }, {
        id: '100',
        name: '待议价',
        updateStatus: [
            { id: '40', name: '待检测', opertype: 6, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '90',
        name: '待退货',
        updateStatus: [
            { id: '100', name: '待议价', opertype: 2, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '60',
        name: '待付款',
        updateStatus: [
            { id: '40', name: '待检测', opertype: 5, userRole: '100' },
            { id: '100', name: '待议价', opertype: 1, userRole: '100' },
            { id: '70', name: '已付款', opertype: 9, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '40',
        name: "待检测",
        updateStatus: [
            { id: '14', name: '预付款', opertype: 15, userRole: '100#300' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '80',
        name: '已取消',
        updateStatus: [
            { id: '14', name: '预付款', opertype: 14, userRole: '100' }
        ]
    }, {
        id: '10',
        name: '已下单',
        updateStatus: [
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '84',
        name: '待拒签',
        updateStatus: [
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }]
}, {
    conditions: {
        //条件说明：SP的订单
        //tag_id= 0  && 渠道类型 = 2B(2B,大B,小B)
        and: {
            channeltype: [2, 4, 8],
            tag_id: '0',
            status: [10, 20]
        }
    },
    data: [{
        id: '10',
        name: '已下单',
        updateStatus: [
            { id: '14', name: '预付款', opertype: 12, userRole: '100' },
            { id: '80', name: '已取消', opertype: 16, userRole: '100' }
        ]
    }, {
        id: '20',
        name: '已发货',
        updateStatus: [
            { id: '14', name: '预付款', opertype: 13, userRole: '100' }
        ]
    }]
}];