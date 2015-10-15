var gulp = require('gulp');
var path = require('path');

var vinylPaths = require('vinyl-paths');
var del = require('del');
var serve = require('browser-sync');
var runSequence = require('run-sequence');
var glob = require('glob');

var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var htmlReplace = require('gulp-html-replace');
var html2js = require('gulp-ng-html2js');
var minifyCss = require('gulp-minify-css');

var ESLINT_FILE = '.eslintrc';
var root = 'src';
var dist = 'dist';

var patterns = {
  js: '**/*.js',
  css: '**/*.css',
  html: '**/*.html',
  spec: '**/*.spec.js',
  tpls: '**/*.tpl.html'
}

var paths = {
  js: path.join(root, '**/*.js'),
  css: path.join(root, '**/*.css'),
  html: path.join(root, '**/*.html'),
  spec: path.join(root, '**/*.spec.js'),
  tpls: path.join(root, '**/*.tpl.html'),
  vendor: {
    css: [
      'node_modules/material-design-lite/material.css'
    ],
    js: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js'
    ]
  }
};

var reload = serve.reload;

function resolveGlob(pattern) {
  return glob.sync(pattern).map(function (filename) {
    return filename.replace('dist/', '');
  });
}

var order = paths.vendor.css
              .concat(paths.vendor.js)
              .map(function (file) {
                return path.basename(file);
              });

function comparer(file1, file2) {

  var idx1 = order.indexOf(file1);
  var idx2 = order.indexOf(file2);

  if (idx1 > -1 && idx2 > -1) {
    return idx1 < idx2 ? -1 : 1;
  }

  if (idx1 > -1 && idx2 == -1) {
    return -1;
  }

  if (idx1 === -1 && idx2 > -1) {
    return 1;
  }

  return 0;
}

gulp.task('build', function (cb) {
  runSequence(
    'clean',
    ['data', 'html2js','scripts', 'scripts:vendor', 'styles', 'styles:vendor'],
    'html',
    cb
  );
});

gulp.task('build:prod', function (cb) {
  runSequence(
    'build',
    'scripts:prod',
    'styles:prod',
    'clean:dist:app',
    'html',
    cb
  );
});

gulp.task('clean', function () {
  return gulp.src(dist)
    .pipe(vinylPaths(del));
});

gulp.task('clean:dist:app', function () {
  return gulp.src('dist/app')
    .pipe(vinylPaths(del));
});

gulp.task('scripts', function () {
  return gulp.src([paths.js, '!' + paths.spec])
    .pipe(eslint({
      configFile: path.join(__dirname, ESLINT_FILE)
    }))
    .pipe(eslint.formatEach('stylish'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(dist));
});

gulp.task('scripts:prod', function () {
  return gulp.src(path.join(dist, patterns.js))
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(dist));
});

gulp.task('scripts:vendor', function () {
  return gulp.src(paths.vendor.js)
    .pipe(gulp.dest(dist));
});

gulp.task('data', function () {
  return gulp.src('./src/app/data/data.json')
    .pipe(gulp.dest(dist));
});

gulp.task('styles', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(dist));
});

gulp.task('styles:prod', function () {
  return gulp.src(path.join(dist, patterns.css))
    .pipe(concat('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(dist))
});

gulp.task('styles:vendor', function () {
  return gulp.src(paths.vendor.css)
    .pipe(gulp.dest(dist));
});

gulp.task('html', function () {
  return gulp.src(path.join(root, 'index.html'))
    .pipe(htmlReplace({
      js: resolveGlob(path.join(dist, patterns.js)).sort(comparer),
      css: resolveGlob(path.join(dist, patterns.css)).sort(comparer)
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('html2js', function () {
  return gulp.src(paths.tpls)
    .pipe(html2js({
      moduleName: 'templateCache',
      rename: function (templateUrl, templateFile) {
        return path.basename(templateUrl);
      }
    }))
    .pipe(gulp.dest(dist))
});

gulp.task('serve', ['build'], function () {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    files: [].concat(
      paths.js,
      paths.css,
      paths.html
    ),
    server: {
      baseDir: dist
    },
  });

  gulp.watch(paths.html, ['html', reload]);
  gulp.watch(paths.tpls, ['html2js', reload]);
  gulp.watch(paths.css, ['styles', reload]);
  gulp.watch(paths.js, ['scripts', reload]);
});
