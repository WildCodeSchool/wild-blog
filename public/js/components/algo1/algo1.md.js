/*
Create Angular module app.blog and define all states
blog : parent state, is an abstrat state too with templateUrl
*/

import algo1Component from './algo1'

let algo1Module = angular.module('app.algo1', [])
    .component('algo1', algo1Component)
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
          console.log("algo1.md.js");
        /*
          Define a state with name 'blog' this state is abstract and url is empty (root of application)
          template is ui-view it's used to display nested views
        */
        // $stateProvider
        //     .state('algo1', {
        //         url: '/algo1',
        //         abstract: true,
        //         templateUrl: 'js/components/algo1/algo1.html'
        //     })
    }])
    .name

export default algo1Module
