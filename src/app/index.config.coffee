angular.module 'ScroggleSupport'
  .config ($logProvider, toastrConfig, AnalyticsProvider) ->
    'ngInject'
    # Enable log
    $logProvider.debugEnabled true
    # Set options third-party lib
    toastrConfig.allowHtml = true
    toastrConfig.timeOut = 3000
    toastrConfig.positionClass = 'toast-top-right'
    toastrConfig.preventDuplicates = true
    toastrConfig.progressBar = true

    # Configure Analytics
    AnalyticsProvider.logAllCalls true
    # AnalyticsProvider.startOffline true
    AnalyticsProvider.setAccount 'UA-74740318-1'
    AnalyticsProvider.trackPages true

    # Analytics Debugging
    # AnalyticsProvider.logAllCalls true
    # AnalyticsProvider.enterDebugMode true
