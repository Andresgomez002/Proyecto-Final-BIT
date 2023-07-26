const { getChapters, insertChapter, reformChapter, removeChapter } = require('../services/chapter.service')
const getAllChapters = async(req , res)=>{
   try {
    const data = await getChapters()
    res.status(200).json({
        ok: true,
        path: '/chapters',
        msg: 'obtener',
        products: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/chapters',
        msg: 'error al obtener',
        
    })
   }
}
const createChapter = async(req , res)=>{
    const inputData = req.body;
  try {
    const data = await insertChapter(inputData);
    res.status(201).json({
        ok: true,
        path: '/chapters',
        msg: 'crear',
        category: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/chapters',
        msg: 'error al crear',
        
    })
  }
}
const updateChapter = async(req , res)=>{
    const inputData = req.params.id;
    const dataBody = req.body;
    try {
        const data = await reformChapter(inputData, dataBody);
        res.status(201).json({
            ok: true,
            path: '/chapters',
            msg: 'actualizar',
            category: data
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            path: '/chapters',
            msg: 'error al actualizar',
            
        })
      }
}
const deleteChapter = async(req , res)=>{
    const inputData = req.params.id;
   try {
    const data = await removeChapter(inputData);
    res.status(200).json({
        ok: true,
        path: '/chapters',
        msg: 'elimina',
        category: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/chapters',
        msg: 'error al eliminar',
        
    })
   }
}

module.exports = {
    getAllChapters,
    createChapter,
    updateChapter,
    deleteChapter
}