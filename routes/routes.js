const express = require('express')
const router = express.Router()


const{
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}=require('../controllers/controller');



// Mostrar products 
router.get('/', getProducts);

// Agregar producto 
router.post('/', createProduct); 

// Consultar
router.get('/:id', getProduct);

// Modificar producto
router.put('/:id', updateProduct);

// Eliminar producto
router.delete('/:id',deleteProduct);

module.exports = router