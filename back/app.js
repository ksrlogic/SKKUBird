require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");

const db = require("./models");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const passportConfig = require("./passport");

const app = express();

app.use(cors({ origin: "*", credentials: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected");
  })
  .catch(console.error);

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3075, () => {
  console.log(`server is running`);
});

// app.get  가져오기
// app.post 생성하기
// app.put 전체 수정
// app.delete 제거
// app.patch 부분 수정
// app.options 찔러보기
// app.head 헤더만 가져오기

// 애매하면 post REST API 제대로 지킬 수 없어용..
