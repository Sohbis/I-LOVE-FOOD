const express = require('express');
const app = express();

app.use(express.static(__dirname + '/Json-server/public'));
app.listen(process.env.PORT || 4000);