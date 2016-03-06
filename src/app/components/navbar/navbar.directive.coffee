angular.module 'ScroggleSupport'
  .directive 'acmeNavbar', ->

    NavbarController = (moment, $state, $scope) ->
      'ngInject'
      vm = this
      # "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow()
      $scope.route = $state.current.name
      return

    directive =
      restrict: 'E'
      templateUrl: 'app/components/navbar/navbar.html'
      scope: creationDate: '='
      controller: NavbarController
      controllerAs: 'vm'
      bindToController: true
