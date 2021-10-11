import express from "express";
import emoji from "node-emoji";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";
import handlebars from "express-handlebars";
import path from "path";
const __dirname = path.resolve();
dotenv.config();

import { router } from "./routers/router.js";

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/src/views/layouts",
    partialsDir: __dirname + "/src/views/partials",
  })
);

app.set("views", "./src/views");
app.set("view engine", "hbs");

const options = {
  userNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      options: options,
    }),
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET,
    cookie: {
      maxAge: 60000,
    },
    rolling: true,
  })
);

const PORT = 8080;
app.use(router);

const server = app.listen(PORT, () => {
  console.log(`${emoji.get("computer")}Server on localhost + port : ${PORT}`);
});

server.on("error", (error) => console.log(error));
