const { Sequelize } = require ("sequelize");

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect:'postgres',
    protocol:'postgres',
    dialectOptions: {
        ssl:{
            require:true,
            rejectUnauthorized: false,
        }
    }
});

database.authenticate()
.then(() => console.log("Database Connected"))
.catch(() => console.error("An error ocurred conneting to the database"))

const obj = {
    Sequelize,
    sequelizeDatabase: database
}

obj.sequelizeDatabase.sync({force:true}).then(() => {
    console.log("drop and re-sync db.")
});

module.exports = database