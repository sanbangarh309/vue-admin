<template>
  <el-card>
    <div ref="editor1">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br></p>
    </div>
  </el-card>
</template>
<script>
  export default {
    created() {
      this.$root.contentTitle = 'WYSIWYG Editor'
      this.$root.contentBreadcrumbs = [
        {
          text: 'Index',
          path: '/'
        },
        {
          text: 'WYSIWYG Editor'
        }
      ]
    },
    mounted() {
      let that = this
      $script([configs.QUILL_SCRIPT_URL], function () {
        // 1. 初始化 editor1
        let quill1 = new Quill(that.$refs.editor1, {
          theme: 'snow'
        })
      })
    }
  }
</script>
<style>
  @import "../../../node_modules/quill/dist/quill.snow.css";
</style>
