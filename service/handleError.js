const headers = require('./headers');

const handleError = (res, err) => {
  let message = '';
  res.writeHead(400, headers);
  if (err) {
    message = err.message;
  } else {
    message = '欄位未填寫正確';
  }
  res.write(JSON.stringify({
    status: 'false',
    message,
  }));
  res.end();
};

module.exports = handleError;
