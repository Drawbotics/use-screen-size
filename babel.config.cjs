module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: process.env.NODE_ENV === 'test' ? 'auto' : false,
      targets: { esmodules: true },
    }],
    '@babel/preset-react',
  ],
};
