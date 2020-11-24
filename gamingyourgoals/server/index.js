const express = require("express"),
    app = express(),
    ctrl = require("./controller.js"),
    port = 4036;

app.use(express.json());


app.listen(port, () => console.log(`Hello Seattle, I'm listening... on port ${port}`));