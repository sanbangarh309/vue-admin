<template>
  <div>
    <el-card>
      <div class="mb-3">普通表格</div>
      <el-table :data="rows">
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="position" label="Position"></el-table-column>
        <el-table-column prop="office" label="Office"></el-table-column>
        <el-table-column prop="extn" label="Extn."></el-table-column>
        <el-table-column prop="start_date" label="Start date"></el-table-column>
        <el-table-column prop="salary" label="Salary"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="mt-3">
      <div class="mb-3">斑马纹表格</div>
      <el-table :data="rows" stripe>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="position" label="Position"></el-table-column>
        <el-table-column prop="office" label="Office"></el-table-column>
        <el-table-column prop="extn" label="Extn."></el-table-column>
        <el-table-column prop="start_date" label="Start date"></el-table-column>
        <el-table-column prop="salary" label="Salary"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="mt-3">
      <div class="mb-3">边框表格</div>
      <el-table :data="rows" stripe border>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="position" label="Position"></el-table-column>
        <el-table-column prop="office" label="Office"></el-table-column>
        <el-table-column prop="extn" label="Extn."></el-table-column>
        <el-table-column prop="start_date" label="Start date"></el-table-column>
        <el-table-column prop="salary" label="Salary"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>

  export default {
    data() {
      const rows = [
        {
          name: "Tiger Nixon",
          position: "System Architect",
          office: "Edinburgh",
          extn: "5421",
          start_date: "2011/04/25",
          salary: "$320,800"
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          extn: "8422",
          start_date: "2011/07/25",
          salary: "$170,750"
        },
        {
          name: "Ashton Cox",
          position: "Junior Technical Author",
          office: "San Francisco",
          extn: "1562",
          start_date: "2009/01/12",
          salary: "$86,000"
        },
        {
          name: "Cedric Kelly",
          position: "Senior Javascript Developer",
          office: "Edinburgh",
          extn: "6224",
          start_date: "2012/03/29",
          salary: "$433,060"
        },
        {
          name: "Airi Satou",
          position: "Accountant",
          office: "Tokyo",
          extn: "5407",
          start_date: "2008/11/28",
          salary: "$162,700"
        },
        {
          name: "Brielle Williamson",
          position: "Integration Specialist",
          office: "New York",
          extn: "4804",
          start_date: "2012/12/02",
          salary: "$372,000"
        },
        {
          name: "Herrod Chandler",
          position: "Sales Assistant",
          office: "San Francisco",
          extn: "9608",
          start_date: "2012/08/06",
          salary: "$137,500"
        },
        {
          name: "Rhona Davidson",
          position: "Integration Specialist",
          office: "Tokyo",
          extn: "6200",
          start_date: "2010/10/14",
          salary: "$327,900"
        },
        {
          name: "Colleen Hurst",
          position: "Javascript Developer",
          office: "San Francisco",
          extn: "2360",
          start_date: "2009/09/15",
          salary: "$205,500"
        }
      ]
      return {rows: rows}
    },
    created() {
      this.$root.contentTitle = 'Basic Tables'
      this.$root.contentBreadcrumbs = [
        {
          text: 'Index',
          path: '/'
        },
        {
          text: 'Basic Tables'
        }
      ]
    }
  }
</script>
