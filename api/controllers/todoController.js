let Todos = require("../models/todoModel");

function getTodos(res){
    Todos.find(function(err, result){
        if(err){
            res.send(err)
        } else {
            res.send(result);
        }
    });
}

module.exports = function(app){
    app.get("/api/todos", function(req,res){
        getTodos(res);
    });
    app.get("/api/todo/:id", function(req,res){
        Todos.findById({_id: req.params.id}, function(err, result){
            if(err){
                res.send(err)
            } else {
                res.send(result);
            }
        });
    });
}