<template>
  <div class="fixed-top page-top">
    <div class="row">
      <div class="col-6 pl-5">
        <a class="logo" href="javascript:;"><span>Hotpot</span>Admin</a>
      </div>
      <div class="col-6">
        <div class="d-flex flex-row-reverse mr-5">
          <div class="ml-4 align-self-center">
            <el-dropdown>
              <a href="javascript:;" class="el-dropdown-link"><img src="holder.js/50x50"/></a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><a><i class="fa fa-user"></i> Profile</a></el-dropdown-item>
                <el-dropdown-item><a><i class="fa fa-cog"></i> Settings</a></el-dropdown-item>
                <el-dropdown-item><a><i class="fa fa-power-off"></i> Sign Out</a></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="ml-4 align-self-center">
            <hp-message></hp-message>
          </div>
          <div class="align-self-center">
            <hp-notification></hp-notification>
          </div>
        </div>
      </div>
    </div>

    <hp-top-menu></hp-top-menu>
  </div>
</template>
<script>
  import hpNotification from './hp-notification'
  import hpMessage from './hp-message'
  import hpTopMenu from './hp-top-menu'

  export default{
    components: {
      hpNotification, hpMessage, hpTopMenu
    }
  }
</script>
