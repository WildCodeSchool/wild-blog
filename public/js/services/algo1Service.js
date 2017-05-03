export default ['$http', class Algo1Service {

    constructor($http) {
        this.$http = $http
        console.log("Algo1Service");
    }
    // get() {
    //     // HTTP Request method GET to our express API
    //     return this.$http.get('/api/algo1')
    // }
}]
