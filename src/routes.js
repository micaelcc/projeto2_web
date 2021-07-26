import {Router} from 'express';

import UserController from './controllers/UserController';
import OrderController from './controllers/OrderController'
import SessionsController from './controllers/SessionsController'
import ProductController from './controllers/ProductController'
import authMiddleware from './middlewares/auth';
import admin from './middlewares/admin';

const routes = new Router();


routes.get('/users', authMiddleware, admin, UserController.show);

routes.post('/users', UserController.store);

routes.delete('/users', authMiddleware, UserController.destroy)

routes.put('/users', authMiddleware, UserController.update);

routes.get('/users/orders', authMiddleware, UserController.showOrders)

routes.put('/orders', authMiddleware, OrderController.update);

routes.post('/orders', authMiddleware, OrderController.store);

routes.post('/sessions', SessionsController.login);

routes.post('/products', authMiddleware, admin, ProductController.store)

routes.put('/products', authMiddleware, admin, ProductController.update);

routes.get('/products', ProductController.show);

routes.get('/products/:id', ProductController.getOne);

routes.delete('/products', authMiddleware, admin, ProductController.destroy);



export default routes;