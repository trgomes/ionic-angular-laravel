angular.module('service', ['ngStorage'])

    .service('webService', function ($localStorage) {

        var _getOfertas = function () {

            //Verifica se existe algo cadastrado no localStorage do navegador
            if (!$localStorage.ofertas) {
                $localStorage.ofertas = [
                    { id: '1', titulo: 'Café', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' },
                    { id: '2', titulo: 'Manteiga', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' },
                    { id: '3', titulo: 'Pão', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' }
                ];
            }

            return $localStorage.ofertas;

        };

        var _getFavoritos = function () {

            if (!$localStorage.favoritos) {
                $localStorage.favoritos = [];
            }

            return $localStorage.favoritos;
        };

        var _setFavoritos = function (favoritos) {
            $localStorage.favoritos = favoritos;
        };

        return {
            getOfertas: _getOfertas,
            getFavoritos: _getFavoritos,
            setFavoritos: _setFavoritos

        };

    })