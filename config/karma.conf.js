module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'src/newStart/CommonBundle/Resources/public/js/vendor/angular.js',
      'src/newStart/CommonBundle/Resources/public/js/vendor/angular-*.js',
      'src/newStart/CommonBundle/Resources/public/js/vendor/angular-mocks.js',
      'src/newStart/CommonBundle/Resources/public/js/app_ng.js',
      'src/newStart/CommonBundle/Resources/public/js/controllers.js',
      'src/newStart/CommonBundle/Resources/public/js/test/unit/**/*.js'
    ],

    exclude: ['app/lib/angular/angular-scenario.js'],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}