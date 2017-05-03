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

        function friend(friends){
          //your code here
          // for each friend in array friends
          //  test if lenght = 4 then push it in return array
          let isFriend = [];
          friends.forEach(function(y) {
            if (y.length === 4) { isFriend.push(y)}
                })
            return  isFriend ;
        }
        this.myFriend = friend(["Ryan", "Kieran", "Mark"]);
        console.log("I have this friends: ", this.myFriend );

    } ]
}

export default algo1
