module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: 'commonjs',
      useBuiltIns: false,
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
  ],
};
