module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/idcard/' // idcard 為 repo 名稱
      : '/'
  }
  