console.log("welcome nodejs");
const PORT = 8080;
const html = require("fs").readFileSync("./index.html");
const http = require("http");
//webサーバーを作成
const server = http.createServer((req, res) => {
  //ブラウザからアクセスが来た時の処理
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); //クライアントに返すヘッダー情報
  res.write(html);
  res.end();

  if (req.method === "POST") {
    //ここに処理を記述する
  }

  if (req.method === "POST") {
    let postData = "";

    req
      .on("data", function (chunk) {
        postData += chunk;
      })
      .on("end", function () {
        res.end("あなたが送信したのは、" + postData);
      });
  }
});

server.listen(PORT, () => {
  console.log("server running!");
});

//npm run devをコマンドで実行するとサーバーが起動し（server.jsが上から読み込まれ）、server running!がターミナルに表示される。
//この時にクライアントからリクエストが送信されてきた時の処理（6-27行目）が登録される。
//補足：npmはNode Package Managerの略。ライブラリを追加したりすることができる。
