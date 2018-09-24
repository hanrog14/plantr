const {db, Plot, Vegatable, Gardener} = require('./model');

let veggie = new Vegatable.create()

db.sync({force: true})
    .then(() => {
        console.log('Db is synced!')
    })
    .catch(() => {
        console.log('Failure syncing db!')
    })
    .finally(() => {
        db.close();
    });
