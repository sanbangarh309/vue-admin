<template>
  <div>
    <el-row gutter="20">
      <el-col span="6">
        <el-card>
          <div class="button-wrapper">
            <el-button>默认按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="primary">主要按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="success">成功按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="warning">警告按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="danger">危险按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="info">信息按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="text">文字按钮</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card>
          <div class="button-wrapper">
            <el-button size="mini">默认按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="primary" size="small">主要按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="success">成功按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="warning" size="large">警告按钮</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card>
          <div class="button-wrapper">
            <el-button :plain="true" type="success">成功按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button :plain="true" type="warning">警告按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button :plain="true" type="danger">危险按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button :plain="true" type="info">信息按钮</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card>
          <div class="button-wrapper">
            <el-button disabled>默认按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="primary" disabled>主要按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="success" disabled>成功按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="warning" disabled>警告按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="danger" disabled>危险按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="info" disabled>信息按钮</el-button>
          </div>
          <div class="button-wrapper">
            <el-button type="text" disabled>文字按钮</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {}
</script>
