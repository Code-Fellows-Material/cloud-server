'use strict';

const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
  res.status(200).send('They Don\'t Think It Be Like It Is, But It Do.');
})

module.exports = {
  start: function (port){
    app.listen(port, () => console.log('Listening on: ', port ));
  }, 
  app,
};