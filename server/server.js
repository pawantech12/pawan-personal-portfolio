require("dotenv").config();

const express = require("express");
const connectDB = require("./lib/connectDB");
const app = express();
const cors = require("cors");

// const router = require("./router/auth-router");
// const noterouter = require("./router/note-router");
const contactRouter = require("./router/contactRouter");
// const projectRouter = require("./router/projectRouter");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api", contactRouter);

// todo: when user create project and hit below endpoint it should be save in mongodb
// app.use("/api", projectRouter);

const port = 3000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
});
