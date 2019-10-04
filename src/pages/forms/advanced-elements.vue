<template>
  <el-card>
    <div class="mb-3">Select</div>
    <el-form>
      <el-row gutter="20">
        <el-col span="12">
          <el-form-item>
            <el-select v-model="value" placeholder="简单使用">
              <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="value3" disabled placeholder="禁用状态">
              <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="value5" multiple placeholder="基础多选">
              <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="value7" placeholder="分组">
              <el-option-group v-for="group in options3" :label="group.label">
                <el-option v-for="item in group.options" :label="item.label" :value="item.value"></el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="12">
          <el-form-item>
            <el-select v-model="value2" placeholder="有禁用选项">
              <el-option v-for="item in options2" :label="item.label" :value="item.value"
                         :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="value4" clearable placeholder="可清空单选">
              <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="value6" placeholder="自定义模板">
              <el-option v-for="item in cities" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="value8" filterable placeholder="可搜索">
              <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        value2: '',
        value3: '',
        value4: '',
        value5: [],
        value6: '',
        value7: '',
        value8: ''
      }
    },
    created()
    {
      this.$root.contentTitle = 'Advanced Elements'
      this.$root.contentBreadcrumbs = [
        {
          text: 'Index',
          path: '/'
        },
        {
          text: 'Advanced Elements'
        }
      ]
    }
    ,

  }
</script>
