/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    return md.controller('UserCenterCtrl', ['$scope','$location', function ($scope, $location) {

        var isLogin = false;

        if(!isLogin){
            $location.path("user/login");
        }
    }]);
});