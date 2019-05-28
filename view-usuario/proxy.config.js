const proxy = [
    {
        context: '/api',
        target: 'http://jhonvio-001-site1.itempurl.com',
        pathRewrite: { '^/api': 'Usuario' }
    }
];
module.exports = proxy;