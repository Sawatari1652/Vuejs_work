<template>
  <div id="search">
    <h1>書籍一覧</h1>
    <v-text-field type="text" v-model="title" label="タイトル"></v-text-field>
    <v-text-field type="text" v-model="author" label="著者"></v-text-field>
    <v-text-field type="text" v-model="publisher" label="出版社"></v-text-field>
    <div class="row">
        <div
          class="
            col-md-2 col-md-offset-8 col-xs-10 col-xs-offset-1 col-sm-10
            offset-sm-1
          ">
          <input
            type="submit"
            class="btn btn-fill btn-primary"
            value="検索"
          />
        </div>
    </div>
    <div class="spacer"></div>

    <div class="container">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>タイトル</th>
              <th>著者</th>
              <th>出版社</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in search_list" v-bind:key="index">
              <td @click="detail(item.bookid)">{{item.title}}</td>
              <td>{{item.author}}</td>
              <td>{{item.publisher}}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="search_list.length===0">検索結果は0件です</p>
    </div>
    <div class="spacer"></div>
    
    <div class="floating" onclick="location.href='register.html'">
      <span>
        <i
          class="glyphicon glyphicon-plus"
          style="margin-top: 8px; margin-left: 3px"
        ></i>
      </span>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      // Jsonのデータを格納
      search_list: []
    };
  },
  name: 'BooksList',
  created: function () {
    axios.post('http://localhost:8081/bookslistget')
      .then(response => {
        this.search_list = response.data
      })
  },
  methods: {
    logout () {
      return this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
        .catch(error => { throw error })
    },
    detail ( bookid ) {
      this.$router.push({
        name: 'BookDetail',
        params: { bookid : bookid }
      })
    },
    regist () {
          this.$router.push('/bookregist')
    }
  }
});
</script>

<style scoped>
#search form {
  margin-top: 15px;
}
</style>