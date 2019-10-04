<template>
  <div>
    <hp-page-top></hp-page-top>
    <div class="page-wrapper p-1">
      <div class="content-wrapper">
        <div class="d-flex justify-content-between">
          <div>
            <h5>{{$root.contentTitle}}</h5>
          </div>
          <div class="ml-5" v-if="$root.contentBreadcrumbs && $root.contentBreadcrumbs.length > 1">
            <ol class="breadcrumb header-breadcrumb">
              <li class="breadcrumb-item" v-for="(v, i) in $root.contentBreadcrumbs" :class="{active: !v.path}">
                <template v-if="v.path">
                  <a :href="v.path">{{v.text}}</a>
                </template>
                <template v-else>
                  {{v.text}}
                </template>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import hpPageTop from './hp-page-top'

  export default {
    name: 'app',
    components: {
      hpPageTop
    }
  }

</script>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap";
  @import "../element-theme/index.css";
  @import "../scss/main";
</style>
