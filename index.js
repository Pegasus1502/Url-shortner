const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db/db");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '192.168.90.73';
app.use(express.json());
connectDB();


const urlRoutes = require('./routes/route.url');
app.use('/', urlRoutes);

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
