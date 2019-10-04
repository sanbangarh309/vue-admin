<template>
  <el-dropdown class="msg">
    <a href="javascript:;" class="el-dropdown-link">
      <el-badge :value="7">
        <i class="fa fa-envelope-o"></i>
      </el-badge>
    </a>
    <el-dropdown-menu slot="dropdown" class="msg-panel">
      <li>
        <div class="header p-2">
          <strong>消息</strong>
          <a href class="float-right">设置</a>
          <a href class="float-right mr-3">全部标记已读</a>
        </div>
        <div class="msg-list">
          <a href v-for="msg in messages" class="clearfix">
            <div class="img-area">
              <img src="holder.js/40x40">
            </div>
            <div class="msg-area">
              <div>{{msg.text}}</div>
              <span>{{ msg.time }}</span>
            </div>
          </a>
        </div>
        <a href class="msg-all text-center p-2">查看所有消息</a>
      </li>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  export default {
    data() {
      var messages = [
        {
          userId: 3,
          text: 'After you get up and running, you can place Font Awesome icons just about...',
          time: '1 min ago'
        },
        {
          userId: 0,
          text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
          time: '2 hrs ago'
        },
        {
          userId: 1,
          text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
          time: '10 hrs ago'
        },
        {
          userId: 2,
          text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
          time: '1 day ago'
        },
        {
          userId: 3,
          text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
          time: '1 day ago'
        },
        {
          userId: 1,
          text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
          time: '2 days ago'
        },
        {
          userId: 0,
          text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
          time: '1 week ago'
        }
      ]
      return {messages: messages}
    }
  }
</script>
