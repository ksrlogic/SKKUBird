"use strict";

var express = require("express");

var postRouter = require("./routes/post");

var app = express();
app.use("/post", postRouter);
app.listen(3065, function () {
  console.log("server is running");
}); // app.get  가져오기
// app.post 생성하기
// app.put 전체 수정
// app.delete 제거
// app.patch 부분 수정
// app.options 찔러보기
// app.head 헤더만 가져오기
// 애매하면 post REST API 제대로 지킬 수 없어용..