var async       = require('async');
var babelify    = require('babelify');
var browserify  = require('browserify');
var del         = require('del');
var expandTilde = require('expand-tilde');
var fs          = require('fs');
var fse         = require('fs-extra');
var gulp        = require('gulp');
var path        = require('path');
var runSequence = require('run-sequence');
var source      = require('vinyl-source-stream');
var spawn       = require("gulp-spawn");

gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('prepare-folders', function (callback) {
  async.parallel({
    build: function (callback) {
      fse.ensureDir(path.join(__dirname, 'build'), callback);
    },
  }, callback);
});


gulp.task('deploy', function (callback) {

  var scriptPath = path.join(__dirname, 'build', 'api.js');
  var headerPath = path.join(__dirname, 'header.js');
  var deploymentPath = path.join(__dirname, 'Output', 'SketchAPI.js');

  async.parallel({
    runtime: function (callback) {
      var script = fs.readFileSync(scriptPath, 'utf8');
      var header = fs.readFileSync(headerPath, 'utf8');
      script = [header, script].join("");

      fse.outputFile(deploymentPath, script, callback);
    }
  }, function (err, data) {
    callback(null);
  });
});

gulp.task('build', function (callback) {
  runSequence('clean', 'prepare-folders', 'bundle', 'deploy', callback);
});

gulp.task('bundle', function () {
  var bundler = browserify({
    entries: ['./Source/API.js'],
    extensions: ['.js'],
    debug: false
  });

  bundler.transform(babelify.configure({
    presets: ["es2015"],
  }));

  return bundler.bundle()
    .on('error',(function(arg) {
      console.log(arg.message);
    }))
    .pipe(source('api.js'))
    .pipe(gulp.dest('./build/'));
});


gulp.task('watch', function () {
  runSequence('build', function () {
    gulp.watch('./Source/**/*.*', function () {
      console.log("Watching...");
      runSequence('build', function () {
        console.log("Rebuild complete!");
      });
    });
  });
});

gulp.task('default', function (callback) {
  runSequence('build', callback);
});
