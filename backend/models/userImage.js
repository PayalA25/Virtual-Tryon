import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({

  userImage: {
    type: String,
    required: true
  },

  clothImage: {
    type: String
  },

  resultImage: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("UserImage", imageSchema);