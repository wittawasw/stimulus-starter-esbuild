import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/javascripts/*.js'],
  bundle: true,
  outdir: 'build',
  minify: true,
  minifyIdentifiers: true,
  treeShaking: true,
})
