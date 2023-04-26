<template>
  <div id="search">
    <h1>書籍一覧</h1>
    <v-text-field type="text" v-model="title" label="タイトル"></v-text-field>
    <v-text-field type="text" v-model="author" label="著者"></v-text-field>
    <v-text-field type="text" v-model="publisher" label="出版社"></v-text-field>
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