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
