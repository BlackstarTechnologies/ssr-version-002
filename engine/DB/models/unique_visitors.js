const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UniqueVisitor = model(
  "UniqueVisitor",
  new Schema(
    {
      uuid: { type: String, unique: true, required: true },
      headers: { type: Schema.Types.Mixed },
      visits: {
        type: [NativeDate],
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = {
  UniqueVisitor,
};
