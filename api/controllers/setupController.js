let Todos = require("../models/todoModel");

module.exports = function(app){
    app.get("/api/setupTodos", function(req,res){
        let seedTodos = [
            {
                text:"Học Node.js",
                isDone: false,
            },
            {
                text:"Học Vue.js",
                isDone: false,
            },
            {
                text:"Viết ứng dụng hoàn chỉnh",
                isDone: false,
            },
        ]
        Todos.create(seedTodos, function(err, results){
            res.send(results);
        })
    })
}