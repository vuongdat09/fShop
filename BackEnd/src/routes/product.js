import express from 'express';
import { addProduct, getAllProducts , getOneProducts , updateProduct , RemoveProduct} from '../controllers/product';
import { checkPermission } from '../middlewares/checkPermission';

const router = express.Router();

router.post('/products',checkPermission,addProduct)
router.get('/products',getAllProducts)
router.get('/products/:id',getOneProducts)
router.put('/products/:id',checkPermission,updateProduct)
router.delete('/products/:id',checkPermission,RemoveProduct)


export default router 

