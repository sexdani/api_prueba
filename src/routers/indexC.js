const {Router}= require('express');
const router = Router();


const { getCategoria }=require('../controllers/index.controlles');
const { getCategoriaById }=require('../controllers/index.controlles');
const { createCategoria}=require('../controllers/index.controlles');
const { updateCategoria }=require('../controllers/index.controlles');
const { deleteCategoria}=require('../controllers/index.controlles');

router.get('/',getCategoria);
router.get('/:id', getCategoriaById);
router.post('/', createCategoria);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);



module.exports=router;