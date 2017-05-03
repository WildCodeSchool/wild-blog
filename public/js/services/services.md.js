/*
Create app.service module
*/
import postsService from './postsService'
import usersService from './usersService'
import algo1Service from './algo1Service'

let servicesModule = angular.module('app.services', [])
    .service('PostsService', postsService)
    .service('UsersService', usersService)
    .service('Algo1Service', algo1Service)
    .name

export default servicesModule
