const { src, dest } = require('gulp')
const sharpResponsive = require('gulp-sharp-responsive')

const img = () =>
  src('src/assets/**/*.webp')
    .pipe(
      sharpResponsive({
        formats: [
          { width: 640, format: 'webp', rename: { suffix: '-sm' } },
          { width: 768, format: 'webp', rename: { suffix: '-md' } },
          { width: 1024, format: 'webp', rename: { suffix: '-lg' } },
          { width: 1280, format: 'webp', rename: { suffix: '-xl' } },
          { width: 1536, format: 'webp', rename: { suffix: '-2xl' } }
        ]
      })
    )
    .pipe(dest('dist/img'))

module.exports = {
  img
}
