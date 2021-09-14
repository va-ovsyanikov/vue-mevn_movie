
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  //   devServer: {
  //     proxy: {
  //         '/': {
  //             target:'http://localhost:3001'
  //         }
  //     }
  // }


  devServer: {
    port: process.env.PORT_VUE
  }
}



