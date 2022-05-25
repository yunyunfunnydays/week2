const Posts = require('../model/posts');
const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');

const postsControllers = {
  async getPosts(res) {
    const allPosts = await Posts.find();
    handleSuccess(res, allPosts);
  },
  async createPosts({ body, res }) {
    try {
      const data = JSON.parse(body);
      if (data.content) {
        let newPost = '';
        newPost = await Posts.create({
          name: data.name,
          content: data.content,
          tags: data.tags,
          type: data.type,
        });
        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (err) {
      handleError(res, err);
    }
  },
  async patchPosts({ body, url, res }) {
    try {
      const id = url.split('/').pop();
      const data = JSON.parse(body);
      let updatePost = '';
      updatePost = await Posts.findByIdAndUpdate(
        id,
        data,
      );
      handleSuccess(res, updatePost);
    } catch (err) {
      handleError(res, err);
    }
  },
  async delAllPosts({ res }) {
    try {
      const delAllPost = await Posts.deleteMany({});
      handleSuccess(res, delAllPost);
    } catch (err) {
      handleError(res, err);
    }
  },
  async delOnePosts({ url, res }) {
    try {
      const id = url.split('/').pop();
      const delOnePost = await Posts.findByIdAndDelete(id);
      handleSuccess(res, delOnePost);
    } catch (err) {
      handleError(res, err);
    }
  },
};

module.exports = postsControllers;
