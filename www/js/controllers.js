angular.module('controllers', ['service'])

    .controller('OfertasController', function ($scope, webService) {

        $scope.ofertas = webService.getOfertas();

    })


    .controller('FavoritosController', function ($scope, webService) {

        $scope.favoritos = webService.getFavoritos();

    })