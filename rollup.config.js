import resolve from '@rollup/plugin-node-resolve';
import postCSS from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';

const transformOutputPath = (output, input) => input.replace('src', 'lib');

export default {
  input: ['packages/**/src/*.js'],
  output: {
    dir: './',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve(),
    postCSS({
      inject: false,
      minimize: {
        discardComments: true
      }
    }),
    multiInput({
      transformOutputPath
    })
  ],
  external(id) {
    if (/@cdw\//.exec(id)) {
      return true;
    }
    if (id === 'lit-element') {
      return true;
    }
  },
  preserveSymlinks: true
}
