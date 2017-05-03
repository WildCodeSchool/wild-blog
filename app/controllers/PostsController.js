/*
This file define controller for Post, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
let Post = require('../models/post')

class PostsController extends Controller {


    constructor() {
        super(Post)
        console.log("I am in PostsController");
    }

    findPublished(req, res, next) {
        // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
        // this.model.find(req.query, (err, documents) => {
        console.log("in findPublished ");
        // GET /search?q=tobi+ferret
        //    req.query.q
          // => "tobi ferret"
        this.model.find('req.query.publish' , (err, documents) => {
        // this.model.find('/app/blog/posts/?publish=true' , (err, documents) => {
            res.json(documents)
            console.log("posts.publish", req.query.publish);

        })
    }

    
}

module.exports = PostsController
