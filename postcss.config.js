module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 50, //结果为：设计稿元素尺寸/37.5，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*']
    }
  }
}