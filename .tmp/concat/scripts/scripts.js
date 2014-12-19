'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', [
    'ngRoute'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'HtmlCtrl'
      })
      .when('/hardware', {
        templateUrl: 'views/hardware.html',
        controller: 'HardCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', ["$scope", function ($scope) {

  }]);

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HtmlctrlCtrl
 * @description
 * # HtmlctrlCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('HtmlCtrl', ["$scope", function ($scope) {

  }]);

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HardCtrl
 * @description
 * # HardctrlCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('HardCtrl', ["$scope", function ($scope) {

  }]);

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HeadctrlCtrl
 * @description
 * # HeadctrlCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('HeadCtrl', ["$scope", "$location", function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
