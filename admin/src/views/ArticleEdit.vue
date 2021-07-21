<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple placeholder="请选择">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
            multiple
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>

            <el-form-item label="详情">
        <el-input v-model="model.body"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {

  components: {

  },
  props: {
    id: {},

  },

  data() {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    async save() {

      let res
      // 修改 数据
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        // 新建数据
        res = await this.$http.post('rest/articles', this.model)
      }

      this.$router.push('/articles/list')
      this.$message({
        type: 'success',

        message: '保存成功'
      })
    },
    // 根据id获取model数据
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    // 获取分类数据
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    }
  },
  // 
  created() {
    this.fetchCategories()
    this.id && this.fetch()

  }
}
</script>
