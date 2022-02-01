"use strict";

const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("They Don't Think It Be Like It Is, But It Do.");
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON: ${PORT}`);
});