<template>
    <div class="spacer"></div>
    <div class="contianer">
      <div class="row">
        <div class="col-md-4 col-md-offset-4 text-center page-title">
          <h1>書籍情報更新</h1>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <form >
      <div class="contianer input-box">
      <div class="row">
        <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
          <span> 書籍ID </span>
        </div>
        <div class="col-md-6 col-xs-offset-1">
          <span>{{bookid}}</span>
        </div>
      </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> タイトル </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <input
              name="title"
              type="text"
              v-model="bookdetail.title"
              class="form-control"
              required
              maxlength="20"
            />
            <div
              class="danger" style="display: none;"
            >
              <div >タイトルは必須です。</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 著者 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <input
              name="author"
              type="text"
              v-model="bookdetail.author"
              class="form-control"
              required
              maxlength="20"
            />
            <div
              class="danger" style="display: none;"
            >
              <div style="display:none;">著者は必須です。</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 出版社 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <div class="select">
              <select name="publisher" id="" v-model="bookdetail.publisher" >
                <option >佐藤出版</option>
                <option >XYZ出版</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 価格 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <input
              name="price"
              type="text"
              v-model="bookdetail.price"
              class="form-control"
              required
            />
            <div class="danger" style="display: none;"
            >
              <div style="display:none;">価格は必須です。</div>
              <div style="display:none;">
                価格は数字を入力してください。
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 購入日 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <input
              name="purchased"
              type="text"
              v-model="bookdetail.buydate"
              class="form-control"
              required
            />
            <div
              class="danger" style="display: none;"
            >
              <div style="display: none;">購入日は必須です。</div>
              <div style="display: none;">
                購入日はyyyy/MM/ddの形式で入力してください。
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 書籍管理部門 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <div class="select">
              <select name="managedDpt" v-model="bookdetail.buyer">
                <option >総務部</option>
                <option >開発部</option>
                <option >営業部</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 更新日 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <span>{{bookdetail.moddate}}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 更新者 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <span>{{bookdetail.moduser}}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-2 col-xs-offset-1 box-header">
            <span> 更新者部署 </span>
          </div>
          <div class="col-md-6 col-xs-offset-1">
            <span>{{bookdetail.moddev}}</span>
          </div>
        </div>
      </div>


      <div class="spacer"></div>

      <div class="container">
        <div class="row">
          <div class="col-md-2 col-md-offset-1 col-sm-4 offset-sm-1">
            <a class="btn btn-fill btn-default" @click="pageback()">戻る</a>
          </div>
          <div class="col-md-2 col-md-offset-6 col-sm-4 offset-sm-2">
            <a class="btn btn-fill btn-primary"  @click="updateBook()">登録</a>
          </div>
        </div>
      </div>
    </form>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      bookid : this.$route.params.bookid,
      // Jsonのデータを格納
      bookdetail : { "bookid":"","title":"","author":"","publisher":"","price":"","buydate":"","buyer":"","moddate":"","moduser":"","moddev":"" }
    };
  },
  name: 'BookEdit',
  created: function () {
    if (this.bookid === undefined) {
      return
    }
    axios.post('http://localhost:8081/bookdetailget', { bookid : this.bookid })
      .then(response => {
        console.log(response.data) // mockData
        console.log(response.status) // 200
        this.bookdetail = response.data
        console.log(this.$route.params.bookid) // data
      })
  },
  methods: {
    pageback () {
      this.$router.push('/bookslist')
    },
    updateBook ( bookid ) {
      axios.post('http://localhost:8081/bookinfomodify', { bookid : this.bookid })
        .then(response => {
          console.log(response.data) // mockData
          console.log(response.status) // 200
          alert("書籍ID:" + bookid + "を更新しました。")
          this.$router.push('/bookslist')
        })
    },
  }
});
</script>
<style>
</style>
