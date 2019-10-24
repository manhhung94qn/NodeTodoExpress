const configValues = require("./config");

module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${configValues.username}:${configValues.password}@learmongodb-m5zsf.gcp.mongodb.net/NodeTodoApp`;
    }
}
