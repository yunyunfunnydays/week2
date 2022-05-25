const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Content 未填寫'],
    },
    tags: [
      {
        type: String,
        required: [true, '貼文標籤 tags 未填寫'],
      },
    ],
    type: {
      type: String,
      enum: ['group', 'person'],
      require: [true, '貼文類型 type 未填寫'],
    },
    image: {
      type: String,
      default: '',
    },
    createAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    name: {
      type: String,
      require: [true, '貼文姓名未填寫'],
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
);

const posts = mongoose.model('post', postsSchema);
module.exports = posts;
