const configValues = require("./config");

module.exports = {
    getDbConnectionString: function(){
        return "mongodb+srv://manhhung94qn:764119@todoexpress-ui1if.mongodb.net/todoExpress?retryWrites=true&w=majority";
    }
}
