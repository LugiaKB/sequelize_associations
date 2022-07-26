import {NextFunction, Request, Response, Router} from 'express';
import * as controller from "../controllers/ProductLineController";
import { ProductLineCreateValidation, ProductLineUpdateValidation } from '../validations/ProductLineValidation';

const router: Router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', ProductLineCreateValidation, controller.create);

router.put('/:id', ProductLineUpdateValidation, controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;