const express = require("express"),
    app = express(),
    ctrl = require("./controller.js"),
    port = 4040;

app.use(express.json());


app.listen(port, () => console.log(`It's working! Who knew??? I'm listening on port ${port}`));