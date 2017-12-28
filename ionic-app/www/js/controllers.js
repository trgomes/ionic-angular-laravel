angular.module('controllers', ['service'])

    .controller('OfertasController', function ($scope, webService, $ionicListDelegate) {

        $scope.ofertas = webService.getOfertas();

        $scope.addFavorito = function (oferta) {
            var favoritos = webService.getFavoritos();

            //Verifica se a oferta já existe nos favoritos
            for (i in favoritos) {
                if (oferta.id == favoritos[i].id) {
                    alert("Esta oferta já foi adicionada!");
                    // Fecha o botão depois de adiconar aos favoritos
                    $ionicListDelegate.closeOptionButtons();
                    return;
                }
            }

            favoritos.push(oferta);
            webService.setFavoritos(favoritos);
            alert("Registro adicionado com sucesso!");
            $ionicListDelegate.closeOptionButtons();
        }

    })


    .controller('FavoritosController', function ($scope, webService, $ionicListDelegate) {

        $scope.favoritos = webService.getFavoritos();

        $scope.removeFavorito = function (oferta) {
            var favoritos = webService.getFavoritos();

            //Verifica se a oferta existe nos favoritos
            for (i in favoritos) {
                if (oferta.id == favoritos[i].id) {
                    favoritos.splice(i, 1);                    
                }
            }
            
            webService.setFavoritos(favoritos);            
            $ionicListDelegate.closeOptionButtons();
        }

    })