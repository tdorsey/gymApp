/// <reference path="../typings/index.d.ts" />

// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .run(['$rootScope', '$log', '$ionicPlatform', function ($rootScope, $log, $ionicPlatform) {    
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        // Debug stuff...
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $log.debug('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
        });
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.debug('$stateChangeError - fired when an error occurs during transition.');
            $log.debug(arguments);
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $log.debug('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
        });
        // $rootScope.$on('$viewContentLoading',function(event, viewConfig){
        //   // runs on individual scopes, so putting it in "run" doesn't work.
        //   $log.debug('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
        // });
        $rootScope.$on('$viewContentLoaded', function (event) {
            $log.debug('$viewContentLoaded - fired after dom rendered', event);
        });
        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            $log.debug('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
            $log.debug(unfoundState, fromState, fromParams);
        });
  }])
  
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl as Dash'
      }
    }
  })

  .state('tab.weights', {
      url: '/weights',
      views: {
        'tab-weights': {
          templateUrl: 'templates/tab-weights.html',
          controller: 'WeightsCtrl as Weights'
        },
      }
    })
    .state('tab.weight-detail', {
      
      url: '/weights/:weightId',
      views: {
        'tab-weights': {
          templateUrl: 'templates/weight-detail.html',
          controller: 'WeightDetailCtrl as Detail'
        }
      }
    })

.state('tab.exercises', {
      url: '/exercises',
      views: {
        'tab-exercises': {
          templateUrl: 'templates/tab-exercises.html',
          controller: 'ExercisesCtrl as Exercises'
        },
      }
    })
    .state('tab.exercise-detail', {
      
      url: '/exercises/:exerciseId',
      views: {
        'tab-exercises': {
          templateUrl: 'templates/exercise-detail.html',
          controller: 'ExerciseDetailCtrl as Detail'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl as Settings'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
});

