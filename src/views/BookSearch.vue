<template>
  <div id="search">
    <h1>書籍一覧</h1>
    <el-form :inline="true">
      <el-form-item label="キーワード">
        <el-input type="text" size="large" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onclick">検索</el-button>
      </el-form-item>
    </el-form>
    <v-row justify="start">
        <v-col cols="12">
          <v-card>
            <v-data-table
              :headers="headers"
              :items="items"
              @click:row="rowClick"
            />
          </v-card>
        </v-col>
      </v-row>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "タイトル", value: "col1", align: "center" },
        { text: "著者", value: "col2", align: "center" },
        { text: "出版社", value: "col3", align: "center" },
      ],
      items: [
        { col1: "テスト", col2: "試験", col3: "TEST"}
      ],
    }
  },
  methods:{
    rowClick(){
      this.$router.push('/BookInfo')
    }
  }
}
</script>

<style scoped>
#search form {
  margin-top: 15px;
}
</style>