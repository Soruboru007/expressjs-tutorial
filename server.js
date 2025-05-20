const express = require("express");
const app = express();
const PORT = 3000;

//ブラウザーでURLをエンターキー押すのはgetメソットに相当する
//reqは来たもの
//resは返すものらしい。
app.get("/", (req, res) => {
  //console.log("hallo express");
  //res.send("こんにちは");
  res.sendStatus(500);
});

app.listen(PORT, () => console.log("サーバーが起動しました。"));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
//これらはちょっと違う話です、if文の理解が甘かったみたです。
//isLoggedInがconstでfalseって宣言されています、しかしif文で (!isLoggedIn)こう書くとfalseがtrueになってログインしてることになる思っていました。
//しかし、if文の時はisLoggedIn = falseなので動かないビックリマークつけないと動かない
// isLoggedInのfalseがif文の中でtrueになって動けるようになったif文が動けるようになっただけでした。

//const isLoggedIn = false; の値は絶対に false のままです。!isLoggedIn は「その瞬間だけ逆（true）」になるだけで、変数自体が変わるわけではないです。らしいい
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("ログインしてないから、401エラー返すよ！");
}
