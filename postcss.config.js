module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 19.2,
      propList: ['*'], 
      selectorBlackList: ['el']
    }
  }
}