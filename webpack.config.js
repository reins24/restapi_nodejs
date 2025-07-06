const path = require('path');

module.exports = {
  entry: './src/index.js', // Ganti dengan path file entry Anda
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'], // Tambahkan ekstensi yang ingin diabaikan
  },
};
