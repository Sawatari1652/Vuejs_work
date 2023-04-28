const express = require('express');
const cors = require('cors');
const app = express();

const users = {
  'userFirst': {
    userId: 1,
    token: '1234567890abcdff'
  }
};

const books = [
    { "bookid":"ISBNXX00001","title":"書籍１","author":"一ノ瀬　太郎","publisher":"佐藤出版","price":"1,000","buydate":"2021/01/01","buyer":"総務部","moddate":"2021/01/01","moduser":"更新ユーザー１","moddev":"購買管理部１" }
   ,{ "bookid":"ISBNXX00002","title":"書籍２","author":"二瓶　太郎","publisher":"XYZ出版","price":"1,100","buydate":"2021/01/01","buyer":"開発部","moddate":"2021/01/01","moduser":"更新ユーザー２","moddev":"購買管理部２" }
   ,{ "bookid":"ISBNXX00003","title":"書籍３","author":"三枝　太郎","publisher":"XYZ出版","price":"1,200","buydate":"2021/01/01","buyer":"営業部","moddate":"2021/01/01","moduser":"更新ユーザー３","moddev":"購買管理部３" }
  ]
app.use(cors({
  origin: 'http://localhost:8080', // source url
  credentials: true,
  optionsSuccessStatus: 200
}))

// login
app.post('/auth', (req, res) => {
  res.send(users['userFirst']);
});

// logoff
app.delete('/auth', (req, res) => {
  res.send('Deleted.')
});

// 書籍リスト取得
app.post('/bookslistget', (req, res) => {
  res.json(books);
});

// 書籍情報取得
app.post('/bookdetailget', (req, res) => {
  console.log(req.body)
  res.json(books[0]);
});

// 書籍情報削除
app.post('/bookinfodelete', (req, res) => {
  res.send( { "status" : "ok" });
});

// 書籍情報更新
app.post('/bookinfomodify', (req, res) => {
  res.send( { "status" : "ok" });
});

// 書籍情報追加
app.post('/bookinforegist', (req, res) => {
  res.send( { "status" : "ok" });
});

app.listen(8081, () => console.log('Listening on port 8081'));
