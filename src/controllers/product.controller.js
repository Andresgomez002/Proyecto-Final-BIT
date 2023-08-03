const { response, request } = require( 'express' );
const { hashSync, genSaltSync, compareSync } = require( 'bcryptjs' );

const { generateToken } = require( '../helpers/jwt.js' );
const { insertProduct, getAllProducts, getProductByID, updateProductByID, removeProductByID, getProductByUserID, getXProducts, searchByTerm } = require( '../services/product.service' );
const { PATH_STORAGE } = require( '../middlewares/uploadFile.js' );
const path = require( 'path' );

const User = require( '../models/User' );
const ProductModel = require('../models/Products.js');


const getProducts = async ( req = request, res = response ) => {

    try {
      const products = await getAllProducts()
console.log('hola');
        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Obtiene todos los productos',
            total: products.length,
            products
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al obtener los productos'
        });    
    }

}
const searchPro = async(req = request, res = response)=>{
    const term = req.params.term || '';

    try {
        const data = await searchByTerm( term );

        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'busca productos  por termino',
            products: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al buscar  producto por termino'
        });    
    }
}
const getNProducts = async ( req = request, res = response ) => {

    try {
        const data = await getXProducts(req.params.number, req.params.category)   // Pendiente

        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Obtiene n productos',
            products: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al obtener los productos'
        });    
    }

}

const getProductById = async ( req = request, res = response ) => {
    const productId = req.params.id;

    try {
        const data = await getProductByID( productId );

        res.status( 201 ).json({
            ok: true,
            path: `/products/${ productId }`,
            msg: 'Obtiene producto por ID',
            product: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/${ productId }`,
            msg: 'Error al obtener producto por ID'
        });    
    }

}

const getProductsByUserId = async ( req = request, res = request ) => {
    const userId = req.params.id;

    try {
        const data = await getProductByUserID( userId );

        console.log( data );

        res.status( 201 ).json({
            ok: true,
            path: `/products/user/${ userId }`,
            msg: 'Obtiene el listado de productos por usuario',
            products: data
        }); 
    } catch (error) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/user/${ userId }`,
            msg: 'Error al obtener el listado de productos por usuario'
        });    
    }
}

const createProduct = async ( req = request, res = response ) => {
    const inputData = req.body;
    const userId = req.authUser.uid;

     // Verifica si se ha subido un archivo
     if ( ! req.file ) {
        return res.status( 400 ).json({ error: 'Debes subir un archivo' });
    }

    // Asegúrate de que PATH_STORAGE esté definido y tenga el valor correcto
    if ( ! PATH_STORAGE ) {
        res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'No se ha configurado correctamente la ruta de almacenamiento de archivos',
        }); 
    }

    const filePath = path.join( PATH_STORAGE, req.file.filename );        // Obtiene la ruta del archivo subido

    // Aquí puedes hacer lo que necesites con la ruta del archivo
    // Por ejemplo, puedes guardar el `filePath` en la base de datos junto con otros datos del producto
    const newProduct = { ...inputData, userId, urlImage: filePath };

    try {
        inputData.userId = userId;
        const urlImage = req.file ? req.file.path : '';

      
        inputData.urlImage = urlImage;

        const data = await insertProduct( inputData );

        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Crea producto',
            product: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al crear producto'
        });    
    }

}

const updateProduct = async ( req = request, res = response ) => {
    const 
        productId = req.params.id,
        inputData = req.body;

        console.group( '----' );
        console.log( productId );
        console.log( inputData );
        console.groupEnd( '----' );


    try {
        const data = await updateProductByID( productId, inputData );

        res.status( 201 ).json({
            ok: true,
            path: `/products/${ productId }`,
            msg: 'Actualiza producto',
            product: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/${ productId }`,
            msg: 'Error al actualizar producto'
        });    
    }

}

const deleteProduct = async ( req = request, res = response ) => {
    const productId = req.params.id;

    try {
        const data = await removeProductByID( productId );

        res.status( 201 ).json({
            ok: true,
            path: `/products/${ productId }`,
            msg: 'Eliminar producto',
            product: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/${ productId }`,
            msg: 'Error al eliminar producto'
        });    
    }

}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductsByUserId,
    getNProducts,
    searchPro
}