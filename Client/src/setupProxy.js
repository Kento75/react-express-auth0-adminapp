const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    // SAME Origin ポリシーがあるからローカルでは回避できるように設定
    app.use(
        proxy('/api/**', {
            target: 'http://localhost:5000',
        })
    );
};