const PostsControllers = require('../controllers/posts');
const HttpControllers = require('../controllers/http');

const routes = (req, res) => {
  const { url, method } = req;
  console.log(url, method);

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  if (url === '/posts' && method === 'GET') {
    PostsControllers.getPosts(res);
  } else if (url === '/posts' && method === 'POST') {
    req.on('end', () => PostsControllers.createPosts({ body, res }));
  } else if (url.startsWith('/posts/') && method === 'PATCH') {
    req.on('end', () => PostsControllers.patchPosts({ body, url, res }));
  } else if (url === '/posts' && method === 'DELETE') {
    PostsControllers.delAllPosts({ res });
  } else if (url.startsWith('/posts/') && method === 'DELETE') {
    PostsControllers.delOnePosts({ url, res });
  } else if (method === 'OPTIONS') {
    HttpControllers.cors(res);
  } else {
    HttpControllers.notFound(res);
  }
};

module.exports = routes;
