<template>
  <el-submenu :index="index">
    <template slot="title"><i v-if="icon" :class="icon" class="mr-1"></i>{{title}}</template>
    <template v-for="sm, i in submenus">
      <hp-top-submenu v-if="sm.submenus && sm.submenus.length > 0" :title="sm.title"
                      :index="sm.path" :icon="sm.icon"
                      :submenus="sm.submenus"></hp-top-submenu>
      <el-menu-item v-else :index="sm.path">{{sm.title}}</el-menu-item>
    </template>
  </el-submenu>
</template>
<script>
  export default {
    name: 'hp-top-submenu',
    props: ['title', 'index', 'icon', 'submenus']
  }

</script>
