<template>
  <el-menu theme="dark" router="true" mode="horizontal" class="pl-1">
    <template v-for="m, i in menus">
      <hp-top-submenu v-if="m.submenus && m.submenus.length > 0" :title="m.title"
                      :index="m.path" :icon="m.icon"
                      :submenus="m.submenus" class="top-menu-item"></hp-top-submenu>
      <el-menu-item v-else :index="m.path" class="top-menu-item"><i :class="m.icon" class="mr-1"></i>{{m.title}}</el-menu-item>
    </template>
  </el-menu>
</template>
<script>
  import {menus} from '../menus'
  import hpTopSubmenu from './hp-top-submenu'

  export default {
    components: {hpTopSubmenu},
    data() {
      return {
        menus: []
      }
    },
    beforeMount() {
      let _routes = {}
      let unfoldRoutes = (rs, p) => {
        rs.forEach((r) => {
          let path
          if (p) {
            if (p.path.charAt(p.path.length - 1) === '/') {
              path = p.path.substr(0, p.path.length - 1)
            } else {
              path = p.path
            }
            if (r.path.charAt(0) !== '/') {
              path += '/' + r.path
            } else {
              path += r.path
            }
          } else {
            path = r.path
          }

          if (r.name) {
            _routes[r.name] = {
              path: path
            }
          }

          if (r.children) {
            unfoldRoutes(r.children, r)
          }
        })
      }
      unfoldRoutes(this.$router.options.routes)

      let mapMenu = (menus) => {
        menus.forEach(function (m) {
          if (m.name && _routes[m.name]) {
            m.path = _routes[m.name].path
          } else {
            m.path = Math.random() + ''
          }

          if (m.submenus && m.submenus.length > 0) {
            mapMenu(m.submenus)
          }
        })
      }
      mapMenu(menus)
      this.menus = menus
    }
  }

</script>
