const DBManager = require('./db');

const db = DBManager.getConnection();




(async()=> {
    try {
        const Cat = db.model('Cat', {name: String, age: Number})
        const kitty = new Cat({name: 'Json Cat', age: 17});
        await kitty.save();
        const queryResult = new Promise((resolve, reject)=>{
            Cat.findOne({
                name: 'Json Cat'
            }, (err, result)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
        const data = await queryResult;
        console.log(data);
    } catch(err) {
        console.log('mongoose error', err);
    } finally {
        console.log('finished')
        db.close((err)=>{
           if (err) {
               console.log('db close err', err);
           }
        });
    }
})();