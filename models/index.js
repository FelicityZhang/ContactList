const Sequelize = require( 'sequelize' );

// connect to database

const db = new Sequelize( {
    database: 'contacts_db',
    dialect: 'postgres'
} );

// define contact model

const Contact = db.define( 'contact', {
    name: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.INTEGER
    },
    city: {
        type: Sequelize.STRING
    }
} );

module.exports = {
    db,
    Contact
}