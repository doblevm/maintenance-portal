require("./db/mongoose");
const express = require("express");
//
const PORT = process.env.PORT;
const app = express();
// Routers
const homeRouter = require("./routers/home");
const codeLisRouter = require("./routers/codeLis");
const _404Router = require("./routers/404");
//
app.use(express.json());
app.use("/", homeRouter);
app.use("/code-lis", codeLisRouter);
app.use(_404Router);
//
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
