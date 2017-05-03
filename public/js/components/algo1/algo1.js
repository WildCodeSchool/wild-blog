/*
Create Angular component algo1 into module app.blog
*/
let algo1 = {
    templateUrl: 'js/components/algo1/algo1.html',
    controller: [ 'UsersService', '$state', function( UsersService, $state ) {
        'use strict'
        console.log("algo1.js");
        angular.extend( this, {
            $onInit() {
                UsersService.getCurrent().then( ( user ) => {
                    this.user = user
                } ).catch( ( err ) => {

                } )
            },
            disconnect() {
                UsersService.disconnect().then( () => {
                    Materialize.toast( 'Disconnected', 4000, 'toast-warning' )
                    this.user = null
                    $state.reload()
                } )
            }
        } )

        let friends = ["Ryan", "Kieran", "Mark"]
        let isFriend = [];
            friends.forEach( function( y ) {
                if ( y.length === 4 ) { isFriend.push( y ) }
            } )
        console.log("I have this friends: ", isFriend );


    } ]
}

export default algo1
