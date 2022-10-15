import mongoose from "mongoose";
const DataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
})

export default mongoose.model("Data", DataSchema)