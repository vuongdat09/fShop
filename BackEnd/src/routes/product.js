import express from 'express';
import { addProduct, getAllProducts , getOneProducts , updateProduct , RemoveProduct} from '../controllers/product';
import { checkPermission } from '../middlewares/checkPermission';

const router = express.Router();

router.post('/products',addProduct)
router.get('/products',getAllProducts)
router.get('/products/:id',getOneProducts)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',RemoveProduct)


export default router 

