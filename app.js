// import path from 'path';
const path = require("path");
const express = require("express");
const app = express();
const http = require('http');
const fs = require("fs");

const port = process.env.PORT || 5000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});
