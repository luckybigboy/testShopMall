module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.png'],
            alias: {
               'assets': '@/assets',
               'components': '@/components',
               'views': '@/views',
               'request': '@/request'
            }
        }
    }
}