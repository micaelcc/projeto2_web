import express from 'express';
import routes from './routes';
import database from './database/';

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
        this.database();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }

    database(){
        database.init()
    }
}

export default new App().server;
