const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codeLisSchema = new Schema({
  codSAP: {
    type: Number,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  alfaNumericCod: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

const CodeLis = mongoose.model("CodeLis", codeLisSchema);

module.exports = CodeLis;
