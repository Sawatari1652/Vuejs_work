<template>
   <div>
    <div class="contianer">
      <div class="row">
        <div class="col-md-4 col-md-offset-4 text-center page-title">
          <h1>書籍情報</h1>
        </div>
      </div>
    </div>
    <div class="spacer"></div>

    <div class="contianer input-box card">
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 書籍ID </span>
        </div>
        <div class="col-md-6">
          <span>{{bookid}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> タイトル </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.title}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 著者 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.author}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 出版社 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.publisher}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 価格 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.price}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 購入日 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.buydate}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 書籍管理部門 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.buyer}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 更新日 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.moddate}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 更新者 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.moduser}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-2 box-header">
          <span> 更新者部署 </span>
        </div>
        <div class="col-md-6">
          <span>{{bookdetail.moddev}}</span>
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="container">
      <div class="row">
        <div class="col-md-2 col-md-offset-1 col-sm-3 offset-sm-1">
          <a class="btn btn-fill btn-default" @click="pageback()" >
            戻る
          </a>
        </div>
        <div class="col-md-2 col-md-offset-4 col-sm-3 offset-sm-2">
          <a class="btn btn-fill btn-danger" @click="deleteBook(bookid)" >
            削除
          </a>
        </div>
        <div class="col-md-2 col-md-offset-1 col-sm-3 offset-sm-0">
          <a class="btn btn-fill btn-primary" @click="modifyBook(bookid)" >
            更新
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      bookid : this.$route.params.bookid,
      bookdetail : null
    };
  },
  name: 'BookDetail',
  created: function () {
    axios.post('http://localhost:8081/bookdetailget', { bookid : this.bookid })
      .then(response => {
        this.bookdetail = response.data
        console.log(this.$route.params.bookid)
      })
  },
  methods: {
    pageback () {
      this.$router.push('/bookslist')
    },
    deleteBook ( bookid ) {
      axios.post('http://localhost:8081/bookinfodelete', { bookid : this.bookid })
        .then(response => {
          console.log(response.data)
          alert("書籍ID:" + bookid + "を削除しました。")
          this.$router.push('/bookslist')
        })
    },
    modifyBook ( bookid ) {
      this.$router.push({
        name: 'BookModify',
        params: { bookid : bookid }
      })
    }
  }
});
</script>
