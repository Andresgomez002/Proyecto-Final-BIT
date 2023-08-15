const ProductModel = require( '../models/Products.js' );


const insertProduct = async ( product ) => {
    const newProduct = new ProductModel( product );

    return await newProduct.save();
}

const getAllProducts = async () => {
    
    return await ProductModel.find({});
}
const getXProducts = async (number, category) => {
    return await ProductModel.find({category}).limit(number);
}

const getProductByID = async ( productId ) => {
    return await ProductModel.findOne({ _id: productId }, {
        userId: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });
}

const getProductByUserID = async ( userId ) => {
    return await ProductModel.find({ userId }, {
        userId: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });
}

const removeProductByID = async ( productId ) => {
    return await ProductModel.findOneAndRemove({ _id: productId });
}

const updateProductByID = async ( productId, updateProduct ) => {
    return await ProductModel.findOneAndUpdate( 
        { _id: productId },     // Id del documento que deseamos actualizar
        updateProduct,          // El documento por el que vamos a actualizar 
        { new: true }           // Configuracion para el comando Update
    );
}
const searchByTerm = async ( searchTerm )=>{

    if(searchTerm){
        const termRegex = new RegExp( searchTerm, 'i' );
   
        return await ProductModel.find({
          $or: [
            { name: { $regex: termRegex } }
          ],
        });
    }else{
        return await ProductModel.find({});
    }
  
  }

module.exports = {
    insertProduct,
    getAllProducts,
    getProductByID,
    removeProductByID,
    updateProductByID,
    getProductByUserID,
    getXProducts,
    searchByTerm
}