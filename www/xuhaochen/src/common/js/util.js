export default {

    getQueryStringByName: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    conversion_trre: function(data) {

        if (data == null || data.length == 0) return data;
    },
    setCookie: function(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
        document.cookie = curCookie;
    },
    getCookie: function(name) {
        var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)"),
            m = document.cookie.match(r);
        return (!m ? "" : m[1]);
    },
    getCookie1: function(name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
        return (arr=document.cookie.match(reg))?unescape(arr[2]):null;
    },
    delCookie: function(name) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = this.getCookie(name)
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
    },
    removeEmptyAtr: function(obj) {
        if (obj == null) return null;
        for (let a in obj) {
            if (obj[a] == null || obj[a] == '') {
                delete obj[a];
            }
        }
        return obj;
    },

    //分转元
    formatMoney: function(money) {
        if (typeof money != 'number') {
            return money;
        }
        var rs = money / 100;
        return rs;
    },

    //元转分
    formatMoneyFen: function(money) {

        if (typeof money != 'number') {
            return money;
        }
        var rs = money * 100;
        return rs ? rs : 0;
    },

    //时间格式化
    formatDate: function(v, f) {
        var F = f.replace(/\W/g, ',').split(','),
            format = ['yyyy', 'MM', 'dd', 'hh', 'mm', 'ss', 'ww'];
        var month = v.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var dateStr = v.getDate();
        if (dateStr < 10) {
            dateStr = '0' + dateStr;
        }
        var date = {
            y: v.getFullYear(),
            M: month,
            d: dateStr,
            h: v.getHours() < 10  ? '0' + v.getHours() : v.getHours(),
            m: v.getMinutes() < 10  ? '0' + v.getMinutes() : v.getMinutes(),
            s: v.getSeconds() < 10  ? '0' + v.getSeconds() : v.getSeconds(),
            w: v.getDay() < 10  ? '0' + v.getDay() : v.getDay(),
        };
        for (var i = 0, num = F.length; i < num; i++) {
            var o = F[i];
            for (var j = 0; j < 7; j++) {
                var S = format[j].slice(-1);
                if (o.match(S)) {
                    if (S == 'w' && date[S] == 0) date[S] = 7;
                    if (o.match(format[j])) {
                        f = f.replace(RegExp(format[j], 'g'), date[S]);
                    } else f = f.replace(RegExp(format[j].slice(format[j].length / 2), 'g'), date[S]);
                }
            }
        }
        return f;
    },

    //星期
    formatWeek(v) {
        return ['日', '一', '二', '三', '四', '五', '六'][v] || '';
    },

    //移除左右空格
    removeBlanks(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },

    createQuery(obj) {
        var result = [];
        Object.keys(obj).forEach(function(key) {
            result.push(key + '=' + encodeURIComponent(obj[key]));
        });
        return result.join('&');
    },

    MillisecondToDate(msd) {
        var time = parseFloat(msd) / 1000;
        if (null != time && "" != time) {
            if (time > 60 && time < 60 * 60) {
                time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
                    parseInt(time / 60.0)) * 60) + "秒";
            } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
                time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
                        parseInt(time / 3600.0)) * 60) + "分钟" +
                    parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
            } else {
                time = parseInt(time) + "秒";
            }
        }
        return time;
    },

    videoCheck(data, channelID) {
        var rsObj = {
            isOpen: false,
            openType: 0
        };

        data.forEach((item) => {
            if (item.ChannelID == channelID) {
                rsObj.isOpen = true;
                rsObj.openType = item.Type;
                return;
            }
        });
        return rsObj;
    },

    trim(str){
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

};