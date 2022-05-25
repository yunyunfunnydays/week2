const headers = require('../service/headers');

const HttpControllers = {
  cors(res) {
    res.writeHead(200, headers);
    res.end();
  },
  notFound(res) {
    res.writeHead(404, headers);
    res.write(JSON.stringify({
      status: 'false',
      message: '無此網路路由',
    }));
    res.end();
  },
};

module.exports = HttpControllers;
