const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected...");
  })
  .catch((e) => console.log(e));
