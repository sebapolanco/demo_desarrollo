const express = require("express");

const app = express();
app.get("/", function (req, res) {
  return res.send("Hola mundo");
});

app.listen(process.env.PORT || 7000, () => {
  console.log("Servidor corriendo en puerta 7000");
})

module.exports = app;