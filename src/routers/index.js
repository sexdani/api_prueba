const {Router}= require('express');
const router = Router();

const { getProdcuto }=require('../controllers/index.controlles');
const { getProdcutoById }=require('../controllers/index.controlles');
const { createProducto }=require('../controllers/index.controlles');
const { updateProducto }=require('../controllers/index.controlles');
const { deleteProducto }=require('../controllers/index.controlles');

router.get('/',getProdcuto);
router.get('/:id', getProdcutoById);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);


module.exports=router;