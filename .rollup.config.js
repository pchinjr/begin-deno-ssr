import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/browser.tsx',
  output: {
    dir: 'dist'
  },
  plugins: [typescript({
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react",
    "module": "es6",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "outDir": "./dist",
    "preserveConstEnums": true,
    "target": "es5"
  })]
}
