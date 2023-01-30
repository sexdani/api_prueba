const {Router}= require('express');
const router = Router();


const { getUsuario }=require('../controllers/index.controlles');
const { getUsuarioById }=require('../controllers/index.controlles');
const { createUsuario }=require('../controllers/index.controlles');
const { updateUsuario}=require('../controllers/index.controlles');
const { deleteUsuario}=require('../controllers/index.controlles');

router.get('/',getUsuario);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports=router;