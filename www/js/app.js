// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var formvalidation = function(allvalidation) {
    var isvalid2 = true;
    for (var i = 0; i < allvalidation.length; i++) {
        console.log(allvalidation);
        if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
            allvalidation[i].validation = "ng-invalid ng-dirty";
            isvalid2 = false;
        }
    }
    return isvalid2;
}
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        $rootScope.transparent_header = false;
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('app.brands', {
            url: '/brands',
            views: {
                'menuContent': {
                    templateUrl: 'templates/brands.html',
                    controller: 'BrandsCtrl'
                }
            }
        })
        .state('app.product', {
            url: '/product/:parent/:category/:brand',
            views: {
                'menuContent': {
                    templateUrl: 'templates/product.html',
                    controller: 'ProductCtrl'
                }
            }
        })        

        .state('app.productcategories', {
            url: '/productcategories',
            views: {
                'menuContent': {
                    templateUrl: 'templates/productcategories.html',
                    controller: 'ProductCategoriesCtrl'
                }
            }
        })

    .state('app.productdetail', {
            url: '/productdetail/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/productdetail.html',
                    controller: 'ProductDetailCtrl'
                }
            }
        })
        .state('app.searchresult', {
            url: '/searchresult',
            views: {
                'menuContent': {
                    templateUrl: 'templates/searchresult.html',
                    controller:'SearchresultCtrl'
                }
            }
        })

    .state('app.deals', {
            url: '/deals',
            views: {
                'menuContent': {
                    templateUrl: 'templates/deals.html',
                    controller: 'DealsCtrl'
                }
            }
        })
        .state('app.category', {
            url: '/category/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/category.html',
                    controller: 'CategoryCtrl'
                }
            }
        })
        .state('app.newarrivals', {
            url: '/newarrivals',
            views: {
                'menuContent': {
                    templateUrl: 'templates/newarrivals.html',
                    controller: 'NewArrivalsCtrl'
                }
            }
        })
        .state('app.distribution', {
            url: '/distribution',
            views: {
                'menuContent': {
                    templateUrl: 'templates/distribution.html',
                    controller: 'DistributionCtrl'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about.html',
                    controller: 'AboutCtrl'
                }
            }
        })
        .state('app.contactus', {
            url: '/contactus',
            views: {
                'menuContent': {
                    templateUrl: 'templates/contactus.html',
                    controller: 'ContactUsCtrl'
                }
            }
        })
        .state('app.cart', {
            url: '/cart',
            views: {
                'menuContent': {
                    templateUrl: 'templates/cart.html',
                    controller: 'CartCtrl'
                }
            }
        })
        .state('app.checkout', {
            url: '/checkout/:totalcart',
            views: {
                'menuContent': {
                    templateUrl: 'templates/checkout.html',
                    controller: 'CheckoutCtrl'
                }
            }
        })
        .state('app.myorders', {
            url: '/myorders',
            views: {
                'menuContent': {
                    templateUrl: 'templates/myorders.html',
                    controller: 'MyOrdersCtrl'
                }
            }
        })
        .state('app.mywishlist', {
            url: '/mywishlist',
            views: {
                'menuContent': {
                    templateUrl: 'templates/mywishlist.html',
                    controller: 'MyWishlistCtrl'
                }
            }
        })
        .state('app.myaccount', {
            url: '/myaccount',
            views: {
                'menuContent': {
                    templateUrl: 'templates/myaccount.html',
                    controller: 'MyAccountCtrl'
                }
            }
        })
        .state('app.editinfo', {
            url: '/editinfo',
            views: {
                'menuContent': {
                    templateUrl: 'templates/editinfo.html',
                    controller: 'EditInfoCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})

.filter('serverimage', function() {
    return function(image) {
        if (image && image != null) {
            return adminimage + image;
        } else {
            return undefined;
        }
    };
})

.filter('localimage', function() {
    return function(image) {
        if (image && image != null) {
            return "img/pcategory/" + image;
        } else {
            return undefined;
        }
    };
})

.filter('numberWithCommas', function() {
    return function(x) {
        if (x)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        else
            return "";
    };
})
