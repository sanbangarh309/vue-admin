<template>
  <el-dropdown class="msg">
    <a href="javascript:;" class="el-dropdown-link">
      <el-badge :value="5">
        <i class="fa fa-bell-o"></i>
      </el-badge>
    </a>
    <el-dropdown-menu slot="dropdown" class="msg-panel">
      <li>
        <div class="header p-2">
          <strong>通知</strong>
          <a href class="float-right">设置</a>
          <a href class="float-right mr-3">全部标记已读</a>
        </div>
        <div class="msg-list">
          <a href v-for="msg in notifications" class="clearfix">
            <div class="img-area">
              <img src="holder.js/40x40">
            </div>
            <div class="msg-area">
              <div v-html="getMessage(msg)"></div>
              <span>1 min ago</span>
            </div>
          </a>
        </div>
        <a href class="msg-all text-center p-2">查看所有通知</a>
      </li>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  export default {
    data() {
      var users = {
        0: {
          name: 'Vlad',
        },
        1: {
          name: 'Kostya',
        },
        2: {
          name: 'Andrey',
        },
        3: {
          name: 'Nasta',
        }
      }
      var notifications = [
        {
          userId: 0,
          template: '&name posted a new article.',
          time: '1 min ago'
        },
        {
          userId: 1,
          template: '&name changed his contact information.',
          time: '2 hrs ago'
        },
        {
          image: 'assets/img/shopping-cart.svg',
          template: 'New orders received.',
          time: '5 hrs ago'
        },
        {
          userId: 2,
          template: '&name replied to your comment.',
          time: '1 day ago'
        },
        {
          userId: 3,
          template: 'Today is &name\'s birthday.',
          time: '2 days ago'
        },
        {
          image: 'assets/img/comments.svg',
          template: 'New comments on your post.',
          time: '3 days ago'
        },
        {
          userId: 1,
          template: '&name invited you to join the event.',
          time: '1 week ago'
        }
      ]

      return {users: users, notifications: notifications}
    },
    methods: {
      getMessage(msg) {
        var text = msg.template;
        if (msg.userId || msg.userId === 0) {
          text = text.replace('&name', '<strong>' + this.users[msg.userId].name + '</strong>');
        }
        return text;
      }
    }
  }
</script>
