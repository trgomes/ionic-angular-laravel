angular.module('service', [])

    .service('webService', function () {

        var _getOfertas = function () {
            return [
                { id: '1', titulo: 'Café', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' },
                { id: '2', titulo: 'Manteiga', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' },
                { id: '3', titulo: 'Pão', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' }
            ];
        };

        var _getFavoritos = function () {
            return [
                { id: '3', titulo: 'Pão', descricao: 'Descrição', valor: 4.45, valor_f: 'R$ 4,45', validade: '2017-12-26', img: '' }
            ]
        };

        var _setFavoritos = function ($favoritos) {

        };

        return {
            getOfertas: _getOfertas,
            getFavoritos: _getFavoritos,
            setFavoritos: _setFavoritos

        };

    })