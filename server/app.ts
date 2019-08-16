import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import * as CrushRoutes from './modules/crush/routes';
import DataBase from './config/db';
import CrushController from './modules/crush/controller';

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
        /*
        this.app.route('/api/crushs/:id').get(CrushRoutes.default.getByID);
        this.app.route('/api/crushs').post(CrushRoutes.default.create);
        this.app.route('/api/crushs/:id').put(CrushRoutes.default.update);
        this.app.route('/api/crushs/:id').delete(CrushRoutes.default.delete);
        this.app.route('/api/crushs/all').get((req, res) => CrushRoutes.default.getAll);
        this.app.route('/api/crushs/test').get((req, res) => 'test');
        this.app.route('/api/crushs').get((req, res) => 'crush');
        */
        this.app.route('/api/crushs/testa').get((req, res) => CrushController.teste(req, res));
    }

    dataBaseConnection() {
        this.dataBase.createConnection();
    }

    closeDataBaseConnection(message, callback) {
        this.dataBase.closeConnection(message, () => callback());
    }
}

export default new App();