<template>
  <div class="card">
    <div class="card-block">
      <chart :options="visitChart" style="height: 300px;"></chart>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        visitChart: {
          title: {
            text: '访问量'
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '1%',
            right: '2%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Onv', 'Dec']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: 'A访问量',
            type: 'line',
            stack: 'A',
            itemStyle: {
              normal: {
                opacity: 0
              }
            },
            lineStyle: {
              normal: {
                opacity: 0
              }
            },
            areaStyle: {
              normal: {
                color: 'rgba(32, 158, 145, 0.298039)'
              }
            },
            data: [15000, 30000, 25000, 21000, 24000, 31000, 40000, 37000, 18000]
          }, {
            name: 'B访问量',
            type: 'line',
            stack: 'B',
            itemStyle: {
              normal: {
                opacity: 0
              }
            },
            lineStyle: {
              normal: {
                opacity: 0
              }
            },
            areaStyle: {
              normal: {
                color: 'rgba(32, 158, 145, 0.298039)'
              }
            },
            data: [19000, 20000, 22000, 25000, 29000, 26000, 25000, 20000, 22000]
          }]
        }
      }
    }
  }
</script>
