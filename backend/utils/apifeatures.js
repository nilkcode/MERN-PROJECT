class ApiFeatures {
    constructor(query, querystr){
        this.query = query;
        this.querystr = querystr;
    }

    search() {
        const keyword =  this.querystr.keyword ? {
            name:  {
                $regex: this.querystr.keyword ,
                $options: "i",   // i meaning  case insensitive(part of mongo db)
                   
                }
        } : { }
        this.query = this.query.find({...keyword})
        return this;  
    }
    filter() {
        const queryCopy = {...this.querystr}
        // removed some field from categories query
        const removedFields = ["keyword","page","limit"];
        removedFields.forEach(key => delete queryCopy[key]);
    }
}

module.exports = ApiFeatures;