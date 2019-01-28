import axios from 'axios';
import util from '../common/js/util';
import constant from '../common/js/constant';
import common from '../common/js/common';

const OMS_API_BASE = constant.HostUrl;

let getAPIUrl = (apiName, systemID) => {

  let api_url = OMS_API_BASE;

  /*if (AMC_API.includes(apiName)) {
      api_url = AMC_API_BASE;
  }*/

  return api_url;
}

//发送请求
let sendHttp = (apiName, apiUrl, params) => {
  // let requestParams = {
  //   head: Object.assign({},constant.paramsHead),
  //   params: {}
  // };
  //requestParams.head.interface = apiName;

  let url = OMS_API_BASE + apiUrl;
  console.log('==============22222========'+params);
  console.log('==============11111========'+url);

  // params.system = 'oms';
  // params.time = new Date().getTime().toString().substr(0, 10);
  // requestParams.params = params;
  return axios.post(url, params).then(res => res);

}

//登录
export const login = params => {return sendHttp('login', '/login', params); };
export const getMenu = params => {return sendHttp('menu', '/menu', params); };
