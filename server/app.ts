import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import DataBase from './config/db';

class App {

    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyParser;

    private dataBase: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
        this.dataBase = new DataBase();
    }

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
      }

    routes(){
        this.app.route('/').get((req, res) => res.status(200).json({ 'message': 'Hello world!' }));
        this.app.route('/game').get((req, res) => res.status(200).json({ 'message': 'Hi gamers' }));
        this.app.route('/getic').get((req, res) => res.status(200).json({ 'message': 'Hi developres' }));
    }

    dataBaseConnection() {
        this.dataBase.createConnection();
    }

    closeDataBaseConnection(message, callback) {
        this.dataBase.closeConnection(message, () => callback());
    }
}

export default new App();