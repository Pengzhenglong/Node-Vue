<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
      parents: []
    }
  },
  methods: {
    async save() {

      let res
      // 修改 数据
      if (this.id) {
        res = await this.$http.put(`categories/${this.id}`, this.model)
      } else {
        // 新建数据
        res = await this.$http.post('categories', this.model)
      }

      this.$router.push('/categories/list')
      this.$message({
        type: 'success',

        message: '保存成功'
      })
    },
    // 根据id获取model数据
    async fetch() {
      const res = await this.$http.get(`categories/${this.id}`)
      this.model = res.data
    },
    // 获取所有数据
    async fetchParents() {
      const res = await this.$http.get(`categories`)
      this.parents = res.data
    }
  },
  // 
  created() {
    this.fetchParents()
    this.id && this.fetch()

  }
}
</script>
