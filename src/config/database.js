module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'pass1234',
    database: 'projeto02_web_db',
    define: {
        timestamp: true,
        underscored:true,
        underscoredAll: true,
    }
}