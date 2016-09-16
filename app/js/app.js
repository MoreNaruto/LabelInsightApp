'use strict';

angular.module('labelInsightApp', [
    'labelInsightApp.controllers'
]);

var modalStarter = (function() {
    for (var i = 1; i <= 25; i++) {
        $('#photo-starter-1').on('click', function() {
            $('#photo-modal-1').modal('show');
        });
    }

});

modalStarter();