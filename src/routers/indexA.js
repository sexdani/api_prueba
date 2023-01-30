const {Router}= require('express');
const router = Router();

const { getAdminstracion }=require('../controllers/index.controlles');
const { getAdminstracionById }=require('../controllers/index.controlles');
const { createAdminstracion }=require('../controllers/index.controlles');
const { updateAdministracion }=require('../controllers/index.controlles');
const { deleteAdministracion }=require('../controllers/index.controlles');

router.get('/',getAdminstracion);
router.get('/:id', getAdminstracionById);
router.post('/', createAdminstracion);
router.put('/:id', updateAdministracion)
router.delete('/:id', deleteAdministracion);


module.exports=router;