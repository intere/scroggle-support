(function(){angular.module("ScroggleSupport",["ngSanitize","ngMessages","ui.router","ui.bootstrap","toastr","angular-google-analytics"])}).call(this),function(){angular.module("ScroggleSupport").service("webDevTec",function(){"ngInject";var e,t;e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"haml",title:"HAML",url:"http://haml.info/",description:"Beautiful, DRY, well-indented, clear markup: templating haiku.",logo:"haml.png"}],t=function(){return e},this.getTec=t})}.call(this),function(){angular.module("ScroggleSupport").directive("acmeNavbar",function(){var e,t;return e=["moment","$state","$scope",function(e,t,o){"ngInject";var a;a=this,a.relativeDate=e(a.creationDate).fromNow(),o.route=t.current.name}],t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("ScroggleSupport").directive("acmeMalarkey",function(){var e,t,o;return e=["$log","githubContributor",function(e,t){"ngInject";var o,a,r;r=this,o=function(){return a().then(function(){e.info("Activated Contributors View")})},a=function(){return t.getContributors(10).then(function(e){return r.contributors=e,r.contributors})},r.contributors=[],o()}],o=function(e,t,o,a){var r,i;i=void 0,r=malarkey(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),t.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(e){r.type(e).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){r.type(e.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})},t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:e,controllerAs:"vm"}})}.call(this),function(){angular.module("ScroggleSupport").factory("githubContributor",["$log","$http",function(e,t){"ngInject";var o,a,r;return o="https://api.github.com/repos/Swiip/generator-gulp-angular",a=function(a){var r,i;return null==a&&(a=30),r=function(e){return e.data},i=function(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))},t.get(o+"/contributors?per_page="+a).then(r)["catch"](i)},r={apiHost:o,getContributors:a}}])}.call(this),function(){angular.module("ScroggleSupport").controller("SupportController",["$timeout",function(e){"ngInject";var t;t=this,t.classAnimation=""}])}.call(this),function(){angular.module("ScroggleSupport").controller("RulesController",["$timeout","webDevTec","toastr",function(e,t,o){"ngInject";var a,r,i,n;n=this,a=function(){r(),e(function(){n.classAnimation="rubberBand"},4e3)},i=function(){o.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),n.classAnimation=""},r=function(){n.awesomeThings=t.getTec(),angular.forEach(n.awesomeThings,function(e){e.rank=Math.random()})},n.awesomeThings=[],n.classAnimation="",n.creationDate=1457228217701,n.showToastr=i,a()}])}.call(this),function(){angular.module("ScroggleSupport").controller("PrivacyController",["$timeout",function(e){"ngInject";var t;t=this,t.classAnimation=""}])}.call(this),function(){angular.module("ScroggleSupport").controller("MainController",["$timeout","webDevTec","toastr",function(e,t,o){"ngInject";var a,r,i,n;n=this,a=function(){r(),e(function(){n.classAnimation="rubberBand"},4e3)},i=function(){o.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),n.classAnimation=""},r=function(){n.awesomeThings=t.getTec(),angular.forEach(n.awesomeThings,function(e){e.rank=Math.random()})},n.awesomeThings=[],n.classAnimation="",n.creationDate=1457228217701,n.showToastr=i,a()}])}.call(this),function(){angular.module("ScroggleSupport").controller("HelpController",["$timeout","webDevTec","toastr",function(e,t,o){"ngInject";var a,r,i,n;n=this,a=function(){r(),e(function(){n.classAnimation="rubberBand"},4e3)},i=function(){o.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),n.classAnimation=""},r=function(){n.awesomeThings=t.getTec(),angular.forEach(n.awesomeThings,function(e){e.rank=Math.random()})},n.awesomeThings=[],n.classAnimation="",n.creationDate=1457228217701,n.showToastr=i,a()}])}.call(this),function(){angular.module("ScroggleSupport").run(["$log","Analytics",function(e,t){"ngInject";return t.createAnalyticsScriptTag,e.debug("runBlock end")}])}.call(this),function(){angular.module("ScroggleSupport").config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.state("support",{url:"/support",templateUrl:"app/support/support.html",controller:"SupportController",controllerAs:"support"}),e.state("rules",{url:"/rules",templateUrl:"app/rules/rules.html",controller:"RulesController",controllerAs:"rules"}),e.state("privacy",{url:"/privacy",templateUrl:"app/privacy/privacy.html",controller:"PrivacyController",controllerAs:"privacy"}),e.state("help",{url:"/help",templateUrl:"app/help/help.html",controller:"HelpController",controllerAs:"help"}),t.otherwise("/")}])}.call(this),function(){angular.module("ScroggleSupport").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("ScroggleSupport").config(["$logProvider","toastrConfig","AnalyticsProvider",function(e,t,o){"ngInject";return e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,o.logAllCalls(!0),o.setAccount("UA-74740318-1"),o.trackPages(!0)}])}.call(this),angular.module("ScroggleSupport").run(["$templateCache",function(e){e.put("app/help/help.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="pad_bottom"><h1>Help</h1></div><div class="pad_bottom"><h3>I don\'t understand the <a href="#/rules">Rules</a>.</h3><h3>I don\'t understand the <a href="#/rules">Goals</a>.</h3><h3>Show me the <a href="#/support">Gameplay</a></h3><h3>Take me to the <a href="#/">Home Page</a></h3><h3>Show me the <a href="#/privacy">Privacy Policy</a></h3></div></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="image_header"><a href="https://itunes.apple.com/us/app/scroggle/id994899163?mt=8"><img src="assets/images/ScroggleIcon512x512.png" class="app_icon"></a> <a href="https://itunes.apple.com/us/app/scroggle/id994899163?mt=8"><img src="assets/images/Download_on_the_App_Store_Badge_US-UK_135x40.svg" class="download_image"></a></div><div class="pad_bottom"><h1>Home</h1><h3>Welcome to the main page for Scroggle.</h3><h3>Scroggle is a word game based on several other popular word games.<h3><h3>Scroggle is currently in active development. Stay tuned for updates</h3></h3></h3></div><div class="pad_bottom"><h1>Demo Video</h1><div class="video_container"><iframe width="560" height="315" src="https://www.youtube.com/embed/tCJRC7U0fOE" frameborder="0" allowfullscreen=""></iframe></div></div></div>'),e.put("app/privacy/privacy.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><h1>Privacy Policy</h1><p>Effective date: October 16, 2018</p><p>Scroggle ("us", "we", or "our") operates the Scroggle mobile application (hereinafter referred to as the "Service").</p><p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p><p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p><h2>Definitions</h2><ul><li><p><strong>Service</strong></p><p>Service is the Scroggle mobile application operated by Scroggle</p></li><li><p><strong>Personal Data</strong></p><p>Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p></li><li><p><strong>Usage Data</strong></p><p>Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p></li><li><p><strong>Cookies</strong></p><p>Cookies are small files stored on your device (computer or mobile device).</p></li></ul><h2>Information Collection and Use</h2><p>We collect several different types of information for various purposes to provide and improve our Service to you.</p><h3>Types of Data Collected</h3><h4>Personal Data</h4><p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p><ul><li>Cookies and Usage Data</li></ul><h4>Usage Data</h4><p>When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").</p><h4>Tracking &amp; Cookies Data</h4><p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p><p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.</p><p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p><p>Examples of Cookies we use:</p><ul><li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li><li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li><li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li></ul><h2>Use of Data</h2><p>Scroggle uses the collected data for various purposes:</p><ul><li>To provide and maintain the Service</li><li>To notify you about changes to our Service</li><li>To allow you to participate in interactive features of our Service when you choose to do so</li><li>To provide customer care and support</li><li>To provide analysis or valuable information so that we can improve the Service</li><li>To monitor the usage of the Service</li><li>To detect, prevent and address technical issues</li></ul><h2>Transfer Of Data</h2><p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p><p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p><p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p><p>Scroggle will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p><h2>Disclosure Of Data</h2><h3>Legal Requirements</h3><p>Scroggle may disclose your Personal Data in the good faith belief that such action is necessary to:</p><ul><li>To comply with a legal obligation</li><li>To protect and defend the rights or property of Scroggle</li><li>To prevent or investigate possible wrongdoing in connection with the Service</li><li>To protect the personal safety of users of the Service or the public</li><li>To protect against legal liability</li></ul><h2>Security of Data</h2><p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p><h2>Service Providers</h2><p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p><p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p><h3>Analytics</h3><p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p><ul><li><p><strong>Answers (Fabric)</strong></p><p>Answers is an anatlycis tool. You can read the Privacy Policy for Answers here: <a href="https://answers.io/img/onepager/privacy.pdf">https://answers.io/img/onepager/privacy.pdf</a></p></li></ul><h2>Links to Other Sites</h2><p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit.</p><p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p><h2>Children\'s Privacy</h2><p>Our Service does not address anyone under the age of 18 ("Children").</p><p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p><h2>Changes to This Privacy Policy</h2><p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p><p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p><p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p><h2>Contact Us</h2><p>If you have any questions about this Privacy Policy, please contact us:</p><ul><li>By email: <a href="mailto:support@internicola.us">support@internicola.us</a></li></ul></div>'),e.put("app/rules/rules.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="pad_bottom"><h1>Goals and Rules</h1><h3>The goal is to score as high as you can by picking longer and more complex words. The longer the word, the more points it\'s worth.</h3></div><div class="pad_bottom"><h1>Rules</h1><ul><li><h3>Either click or swipe words on the board.</h3></li><li><h3>Letters MUST be adjacent (diagonal letters are legal)</h3></li><li><h3>A single die can only be used once per word</h3></li></ul></div><div class="pad_bottom"><h1>Gameplay</h1><h3>To select a word, you either swipe the letters (in order) that you want to use to build a word</h3><h3>-or-</h3><h3>click the (adjacent) letters you want to use to make a word (terminate the word by clicking the final letter a second time).</h3><ul><li><h3>If the selection path becomes a red color, then the word is not in the game dictionary.</h3></li><li><h3>If the selection path becomes a yellow color, then you have already guessed that (valid) word</h3></li><li><h3>If the selection path remains a green color, then you have guessed a valid word and it will show up in the word list after a short pause</h3></li></ul></div></div>'),e.put("app/support/support.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="pad_bottom"><h1>Gameplay</h1><h3>Swipe dice on the screen to make a selection (depicted in the image below)</h3><img src="assets/images/guessing.png" class="image_80"></div><div class="pad_bottom"><h3>After you let go, you\'ll either score a word (the word shows and fades away) and is then scored and added to your score:</h3><img src="assets/images/valid.png" class="image_80"></div><div class="pad_bottom"><h3>If you have already guessed a word, the selection will turn yellow and quickly fade away:</h3><img src="assets/images/duplicate.png" class="image_80"></div><div class="pad_bottom"><h3>If you select a word that is not in the Scroggle dictionary, then it will turn red and quickly fade away:</h3><img src="assets/images/invalid.png" class="image_80"></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-class="{active:route==\'home\'}" class="text-uppercase"><a ng-href="#">Home</a></li><li ng-class="{active:route==\'support\'}" class="text-uppercase"><a ng-href="#/support">Support</a></li><li ng-class="{active:route==\'rules\'}" class="text-uppercase"><a ng-href="#/rules">Goals + Rules</a></li><li ng-class="{active:route==\'privacy\'}" class="text-uppercase"><a ng-href="#/privacy">Pivacy Policy</a></li><li ng-class="{active:route==\'help\'}" class="text-uppercase"><a ng-href="#/help">Help</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"></ul></div></div><img src="assets/images/ScroggleBanner.jpg" style="width:100%"></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-5ebaafbee4.js.map
