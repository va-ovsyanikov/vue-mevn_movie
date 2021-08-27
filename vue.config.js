module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
  
  

    // outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/': {
                target:'https://todo-mevn-app.herokuapp.com/'
            }
        }
    }

}
