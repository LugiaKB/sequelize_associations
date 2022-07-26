import express, {Express, Router} from 'express';

import office from './OfficeRoute';
import employee from './EmployeeRoute';
import productLine from './ProductLineRoute';
import customer from './CustomerRoute';
import order from './OrderRoute';

const routes: Router = express.Router();

routes.use('/office', office);
routes.use('/employee', employee);
routes.use('/productline', productLine);
routes.use('/customer', customer);
routes.use('/order', order);

export default routes;