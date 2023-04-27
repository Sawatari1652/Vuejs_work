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
      items: [
        {title: "はじめてのVue", author: "田中太郎", publisher: "ABC株式会社"},
        {title: "はじめてのJava", author: "田中太郎", publisher: "ABC株式会社"},
        {title: "はじめてのC", author: "田中太郎", publisher: "ABC株式会社"},
      ],
      title: "",
      author: "",
      publisher: ""
    }
  },
  computed: {
      headers() {
        return [
          {
            text: 'タイトル',
            align: 'center',
            sortable: false,
            value: 'title',
            filter: this.titleFilter,
          },
          {
            text: '著者',
            align: 'center',
            value: 'author',
            filter: this.authorFilter,
          },
          {
            text: '出版社',
            align: 'center',
            value: 'publisher',
            filter: this.publisherFilter,
          },
        ]
      },
    },
  methods:{
    rowClick(){
      this.$router.push('/BookInfo')
    },
    titleFilter(value) {
        if (!this.titleFilterValue) {
          return true
        }
        return value.toLowerCase().includes(this.titleFilterValue.toLowerCase());
    },
    authorFilter(value) {
        if (!this.authorFilterValue) {
          return true
        }
        return value === this.authorFilterValue
    },
    publisherFilter(value) {
        if(!this.publisherFilterValue) {
          return true
        }
        return value === this.publisherFilterValue
    }
  }
}
</script>

<style scoped>
#search form {
  margin-top: 15px;
}
</style>