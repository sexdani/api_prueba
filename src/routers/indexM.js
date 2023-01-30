const {Router}= require('express');
const router = Router();


const { getMarcas }=require('../controllers/index.controlles');
const { getMarcasById }=require('../controllers/index.controlles');
const { createMarca}=require('../controllers/index.controlles');
const { updateMarca }=require('../controllers/index.controlles');
const { deleteMarca}=require('../controllers/index.controlles');

router.get('/',getMarcas);
router.get('/:id', getMarcasById);
router.post('/', createMarca);
router.put('/:id', updateMarca);
router.delete('/:id', deleteMarca);

module.exports=router;