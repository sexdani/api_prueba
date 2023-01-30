const {Router}= require('express');
const router = Router();


const { getFavoritos }=require('../controllers/index.controlles');
const { getFavoritosById }=require('../controllers/index.controlles');
const { createFavorito }=require('../controllers/index.controlles');
const { updateFavoritos}=require('../controllers/index.controlles');
const { deleteFavoritos}=require('../controllers/index.controlles');

router.get('/',getFavoritos);
router.get('/:id', getFavoritosById);
router.post('/', createFavorito);
router.put('/:id', updateFavoritos);
router.delete('/:id', deleteFavoritos);

module.exports=router;