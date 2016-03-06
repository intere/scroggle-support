angular.module 'ScroggleSupport'
  .run ($log, Analytics) ->
    'ngInject'
    Analytics.createAnalyticsScriptTag
    $log.debug 'runBlock end'
