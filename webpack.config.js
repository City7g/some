import Dotenv from 'dotenv-webpack'

export default {
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  plugins: [new Dotenv()],
}
