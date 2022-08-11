// importar gulp y los plugins
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(callback) {
    // identicar el archivo sass
    return src('src/scss/app.scss')
    
    // compilar el archivo sass a css
    .pipe(sass().on('error', sass.logError))
    
    // almacenar en el disco duro
    .pipe(dest('build/css'))

    callback();
}


function watchFiles(callback) {
    watch('src/scss/**/*.scss', css);
    callback();
}

exports.css = css;
exports.watch = watchFiles;