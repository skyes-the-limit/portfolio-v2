const { src, dest } = require('gulp')
const sharpResponsive = require('gulp-sharp-responsive')

const img = () =>
  src('src/assets/**/!(*-xs|*-sm|*-md|*-lg|*-xl|*-2xl).webp')
    .pipe(
      sharpResponsive({
        formats: [
          { width: 480, format: 'webp', rename: { suffix: '-xs' } },
          { width: 640, format: 'webp', rename: { suffix: '-sm' } },
          { width: 768, format: 'webp', rename: { suffix: '-md' } },
          { width: 1024, format: 'webp', rename: { suffix: '-lg' } },
          { width: 1280, format: 'webp', rename: { suffix: '-xl' } },
          { width: 1536, format: 'webp', rename: { suffix: '-2xl' } }
        ]
      })
    )
    .pipe(dest('src/assets'))

module.exports = {
  img
}
