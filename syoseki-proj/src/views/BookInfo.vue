<template>
  <div id="app">
    <h1>書籍情報</h1>
    <div>
      <label for="title">書籍ID：</label>
      <input type="text" v-model="title" placeholder="タイトル">
    </div>
    <div>
      <label for="body">タイトル：</label>
    </div>
    <div>
      <input type="submit" value="追加" @click="addList">
    </div>
    <ul v-for="(list, i) in lists" v-bind:key="i">
      <li>id: {{i}}, title: {{ list.title }} <button @click="deleteList(i)">削除</button></li>
    </ul>
    <pre>
      {{$data}}
    </pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: [
      {title: 'TITLE1', body: 'content'},
      {title: 'TITLE2', body: 'content'}
    ],
    title: '',
    body: ''
  }),
  methods: {
    // リストの追加
    addList: function(){
      if(this.title === '' || this.body === '') return

      this.lists.push({title: this.title, body: this.body})
      this.title = ''
      this.body = ''
    },
    // リストの削除
    deleteList: function(i){
      this.lists.splice(i,1)
    }
  }
};
</script>

<style scoped>
.linkable:hover {
  cursor: pointer;
  background-color: #ff9;
}

.image {
  float:left;
}

.image img {
  height: 180px;
}

.details {
  float: left;
}

.details li {
  list-style-type: none;
  text-align: left;
}

.clearfix {
  width: 100%;
  margin-bottom: 10px;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>