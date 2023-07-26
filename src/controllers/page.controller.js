const { getPages, insertPage, reformPage, removePage } = require('../services/page.service')
const getAllPages = async(req , res)=>{
   try {
    const data = await getPages()
    res.status(200).json({
        ok: true,
        path: '/pages',
        msg: 'obtener',
        products: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/pages',
        msg: 'error al obtener',
        
    })
   }
}
const createPage = async(req , res)=>{
    const inputData = req.body;
  try {
    const data = await insertPage(inputData);
    res.status(201).json({
        ok: true,
        path: '/pages',
        msg: 'crear',
        category: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/pages',
        msg: 'error al crear',
        
    })
  }
}
const updatePage = async(req , res)=>{
    const inputData = req.params.id;
    const dataBody = req.body;
    try {
        const data = await reformPage(inputData, dataBody);
        res.status(201).json({
            ok: true,
            path: '/pages',
            msg: 'actualizar',
            category: data
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            path: '/pages',
            msg: 'error al actualizar',
            
        })
      }
}
const deletePage = async(req , res)=>{
    const inputData = req.params.id;
   try {
    const data = await removePage(inputData);
    res.status(200).json({
        ok: true,
        path: '/pages',
        msg: 'elimina',
        category: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/pages',
        msg: 'error al eliminar',
        
    })
   }
}

module.exports = {
    getAllPages,
    createPage,
    updatePage,
    deletePage
}