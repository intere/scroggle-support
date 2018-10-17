angular.module 'ScroggleSupport'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainController'
        controllerAs: 'main'
    $stateProvider
      .state 'support',
        url: '/support'
        templateUrl: 'app/support/support.html'
        controller: 'SupportController'
        controllerAs: 'support'
    $stateProvider
      .state 'rules',
        url: '/rules'
        templateUrl: 'app/rules/rules.html'
        controller: 'RulesController'
        controllerAs: 'rules'
    $stateProvider
      .state 'privacy',
        url: '/privacy'
        templateUrl: 'app/privacy/privacy.html'
        controller: 'PrivacyController'
        controllerAs: 'privacy'
    $stateProvider
      .state 'about',
        url: '/about'
        templateUrl: 'app/about/about.html'
        controller: 'AboutController'
        controllerAs: 'about'
    $stateProvider
      .state 'help',
        url: '/help'
        templateUrl: 'app/help/help.html'
        controller: 'HelpController'
        controllerAs: 'help'

    $urlRouterProvider.otherwise '/'
