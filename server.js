console.clear();

const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

dbConnect();

app.use(express.json());
app.use("/api/user", require("./routes/user"));
app.use("/api/seller", require("./routes/seller"));
app.use("/api/item", require("./routes/item"));
app.use("/api/cart", require("./routes/cart"));

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`🚀 server is running on http://Localhost:${PORT}..`)
);
