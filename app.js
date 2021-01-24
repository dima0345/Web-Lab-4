(function () {
    'use strict';

    angular.module('app', [])
        .controller('buycontroller', buycontroller)
        .controller('boughtcontroller', boughtcontroller)
        .service('itemsservice', itemsservice);

    buycontroller.$inject = ['itemsservice'];
    function buycontroller(service) {
        var controller = this;
        controller.tobuyitems = service.gettobuyitems();

        controller.addtobought = function (itemIndex) { 
            service.addboughtitem(itemIndex);
        }
    };

    boughtcontroller.$inject = ['itemsservice'];
    function boughtcontroller(service) {
        var controller = this;
        controller.boughtItems = service.getboughtitems();
    };

    function itemsservice() {
        var service = this;

        var boughtitems = [];

        var tobuyitems = [
            new item("Яблука", 6),
            new item("Груші", 7),
            new item("Сливи", 8),
            new item("Кавун", 9),
            new item("Вишні", 1),
            new item("Банани", 9),
            new item("Мандарини", 1)
        ];

        service.addboughtitem = function (shopItemId) {
            boughtitems.push(tobuyitems[shopItemId]);
            tobuyitems.splice(shopItemId, 1);
        };

        service.gettobuyitems = function () {
            return tobuyitems;
        };

        service.getboughtitems = function () {
            return boughtitems;
        };
    };

    class item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();