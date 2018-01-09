const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));


let port = 3000;

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});

