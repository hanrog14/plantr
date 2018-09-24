const Sequelize = require("sequelize");

const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false
});

const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});

const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
});

const Vegatable = db.define('vegatable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
});

Plot.belongsTo(Gardener);
Plot.belongsToMany(Vegatable, {through: 'plantingDesign'});
Vegatable.belongsToMany(Plot, {through: 'plantingDesign'});
Gardener.belongsTo(Vegatable, {as: 'favorite_vegatable'});

module.exports = {db, Plot, Vegatable, Gardener};
