//校验

export default {

    //是否包含特殊字符串
    specialString(str) {

        var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

        if (regEn.test(str) || regCn.test(str)) {
            return false;
        }
        return true;
    },

    //ime验证
    imei(val) {
        return /^[A-Za-z0-9]{12,18}$/.test(val);
    },

    integer(val){
        return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(val)
    },

    int(val){
        return /^-?\d+$/.test(val)
    }

}