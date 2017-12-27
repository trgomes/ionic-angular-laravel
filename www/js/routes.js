angular.module('routes', [])

// Conifuração de rotas
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true, //Define como template
            templateUrl: 'templates/tema.html'
        })
        .state('app.ofertas', {
            url: '/ofertas',
            views: {
                'menuContent': {
                    templateUrl: 'templates/ofertas.html',
                    controller: 'OfertasController'
                }
            }
        })
        .state('app.favoritos', {
            url: '/favoritos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/favoritos.html',
                    controller: 'FavoritosController'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/ofertas')
})