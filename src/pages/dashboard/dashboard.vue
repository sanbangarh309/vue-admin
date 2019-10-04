<template>
  <div>
    <el-card class="mb-3">
      <div class="mb-3">介绍</div>
      <div>
        <p class="text-justify">HotpotAdmin 是采用 <a href="//cn.vuejs.org/" target="_blank">Vue.js 2.0</a> 与 <a
          href="//element.eleme.io/" target="_blank">element-ui</a> 开发的免费开源后台管理模板</p>
        <p class="text-justify"><a href="//github.com/kevin70/hotpot-admin" target="_blank">GitHub 地址</a></p>
        <p class="text-justify">有任何问题可以联系 <a href="mailto:kevinz@weghst.com">kevinz@weghst.com</a></p>
      </div>
    </el-card>

    <el-row gutter="20">
      <el-col span="6">
        <el-card>
          <div slot="header">
            <el-row>
              <el-col span="6">
                <i class="fa fa-comments fa-5x"></i>
              </el-col>
              <el-col span="18">
                <div class="huge">26</div>
                <div>New Comments!</div>
              </el-col>
            </el-row>
          </div>
          <div>
            <span class="float-xs-left">View Details</span>
            <span class="float-xs-right"><i class="fa fa-arrow-circle-right"></i></span>
            <div class="clearfix"></div>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card>
          <div slot="header">
            <el-row>
              <el-col span="6">
                <i class="fa fa-tasks fa-5x"></i>
              </el-col>
              <el-col span="18">
                <div class="huge">12</div>
                <div>New Tasks!</div>
              </el-col>
            </el-row>
          </div>
          <div>
            <span class="float-xs-left">View Details</span>
            <span class="float-xs-right"><i class="fa fa-arrow-circle-right"></i></span>
            <div class="clearfix"></div>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card>
          <div slot="header">
            <el-row>
              <el-col span="6">
                <i class="fa fa-shopping-cart fa-5x"></i>
              </el-col>
              <el-col span="18">
                <div class="huge">12</div>
                <div>New Orders!</div>
              </el-col>
            </el-row>
          </div>
          <div>
            <span class="float-xs-left">View Details</span>
            <span class="float-xs-right"><i class="fa fa-arrow-circle-right"></i></span>
            <div class="clearfix"></div>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card>
          <div slot="header">
            <el-row>
              <el-col span="6">
                <i class="fa fa-support fa-5x"></i>
              </el-col>
              <el-col span="18">
                <div class="huge">12</div>
                <div>New Tickets!</div>
              </el-col>
            </el-row>
          </div>
          <div>
            <span class="float-xs-left">View Details</span>
            <span class="float-xs-right"><i class="fa fa-arrow-circle-right"></i></span>
            <div class="clearfix"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import visitChart from './visit-chart'
  export default {
    name: 'dashboard',
    components: {visitChart},
    data: function () {
      let data = []

      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }

      return {
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ],
          animationDuration: 2000
        }
      }
    },
    created() {
      this.$root.contentTitle = 'Dashboard'
      this.$root.contentBreadcrumbs = []
    }
  }
</script>
