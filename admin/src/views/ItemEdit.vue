<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
    afterUpload(res) {
      // console.log(res)
      // vue显示赋值
      this.$set(this.model, 'icon', res.url)

      // this.$nextTick(()=>{
      //   this.model.icon=res.url
      // })
      // this.model.icon=res.url
    },
    async save() {

      let res
      // 修改 数据
      if (this.id) {
        res = await this.$http.put(`rest/items/${this.id}`, this.model)
      } else {
        // 新建数据
        res = await this.$http.post('rest/items', this.model)
      }

      this.$router.push('/items/list')
      this.$message({
        type: 'success',

        message: '保存成功'
      })
    },
    // 根据id获取model数据
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data
    },

  },
  // 
  created() {

    this.id && this.fetch()

  }
}
</script>

<style scoped >
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.avatar {
  width: 5rem;
  height: 5rem;
  display: block;
}
</style>

<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
</style>