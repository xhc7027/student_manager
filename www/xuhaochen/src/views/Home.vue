<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
        {{collapsed?'':sysName}}
      </el-col>
      <el-col :span="1">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col :span="9" style="color:red;font-size: 20px">{{formatEnv(sysEnv)}}</el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">{{sysUserName}} <i class="el-icon-caret-bottom"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" :collapse="collapsed">
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <template v-if="item.leaf == false">
              <el-submenu :index="index+''">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span v-show="!collapsed">{{item.name}}</span>
                </template>
                <el-menu-item @click="refresh(child)" v-for="(child,cIndex) in item.children" v-if="!child.hidden"
                              :index="child.path">
                  {{child.name}}
                </el-menu-item>
              </el-submenu>
            </template>
            <template v-else>
              <template v-for="(child,cIndex) in item.children">
                <el-menu-item :index="child.path" v-if="!child.hidden" @click="refresh(child)">
                  <i class="el-icon-menu"></i>
                  <span v-show="!collapsed">{{child.name}}</span>
                </el-menu-item>
              </template>
            </template>
          </template>
        </el-menu>
      </aside>
      <section id="content" class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container" style="margin: 10px 0;">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" @click="refresh(item)">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <router-view></router-view>
          </el-col>
        </div>
      </section>

    </el-col>
  </el-row>
</template>

<script>
  import {getEnv} from '../api/api';
  import common from '../common/js/common'

  export default {
    data() {
      return {
        sysName: '少华学生管理系统',
        collapsed: false,
        sysUserName: '',
        system_list: [],
        sysEnv: '',
        Menu: [],
      }
    },
    methods: {
      init() {
        this.getMenuList();
      },
      //获取
      getMenuList() {
        getMenu().then(res => {
          if (res.code) {
            Menu = res.data
          }
        })
      },
      formatEnv(env) {
        if (env == 'testing') {
          return '【测试环境】';
        } else if (env == 'development') {
          return '【开发环境】';
        } else {
          return;
        }
      },
      refresh(router) {
        let path = router.path;
        this.$router.push({
          path,
          query: {
            t: +new Date()
          }
        });
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          //sessionStorage.removeItem('userInfo');
          common.removeSession('userInfo');
          _this.$router.push('/login');
        }).catch(() => {

        });
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      showMenu(i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
      }
    },
    // mounted() {
    //
    // 	var user = common.getUserInfo();
    //
    // 	if(user == null){
    // 		this.$router.push('/login');
    // 		return false;
    // 	}
    //
    // 	this.sysUserName = user.username || '';
    //
    // 	//所拥有系统
    // 	this.system_list = [];//common.getUserInfo();
    //         getEnv({}).then((res)=>{
    // 		if(res.status){
    // 		    this.sysEnv = res.data.environment;
    // 		}
    // 	})
    // },
    watch: {
      '$route'(to, from) {
      }
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }

</script>

<style type="text/css">
  .non-trace {
    text-decoration: none;
    color: #48576a;
  }

  .non-trace:hove {
    color: #48576a;
    text-decoration: none;
  }
</style>

<style scoped lang="scss">
  @import '../styles/vars';

  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: $color-primary;
      color: #fff;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
          cursor: pointer;
          color: #fff;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0px 10px 10px;
            float: right;
          }
        }
      }
      .logo {
        //width:230px;
        height: 60px;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238, 241, 146, 0.3);
        border-right-width: 1px;
        border-right-style: solid;
        img {
          width: 40px;
          float: left;
          margin: 10px 10px 10px 18px;
        }
        .txt {
          color: #fff;
        }
      }
      .logo-width {
        width: 230px;
      }
      .logo-collapse-width {
        width: 60px
      }
      .tools {
        padding: 0px 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      aside {
        flex: 0 0 230px;
        width: 230px;
        .el-menu {
          height: 100%;
        }
        .collapsed {
          width: 60px;
          .item {
            position: relative;
          }
          .submenu {
            position: absolute;
            top: 0px;
            left: 60px;
            z-index: 99999;
            height: auto;
            display: none;
          }

        }
      }
      .menu-collapsed {
        flex: 0 0 60px;
        width: 60px;
      }
      .menu-expanded {
        flex: 0 0 230px;
        width: 230px;
      }
      .content-container {
        // background: #f1f2f7;
        flex: 1;
        // position: absolute;
        // right: 0px;
        // top: 0px;
        // bottom: 0px;
        // left: 230px;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {
          //margin-bottom: 15px;
          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
        }
      }
    }

    //自定义按钮颜色
    //确定
    .btn-determine {
      background-color: $color-ok-btn;
    }
    //取消
    .btn-cancel {
      background-color: $color-cancel-btn;
    }
  }
</style>
