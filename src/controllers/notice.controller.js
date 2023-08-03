
const { getNotices, insertNotice, reformNotice, removeNotice } = require('../services/notice.service');
const getAllNotice = async(req , res)=>{
   try {
    const data = await getNotices()
    res.status(200).json({
        ok: true,
        path: '/notice',
        msg: 'obtener',
        products: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/notice',
        msg: 'error al obtener',
        
    })
   }
}
const createNotice = async(req , res)=>{
    const inputData = req.body;
  try {
    const data = await insertNotice(inputData);
    res.status(201).json({
        ok: true,
        path: '/notice',
        msg: 'crear',
        category: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/notice',
        msg: 'error al crear',
        
    })
  }
}
const updateNotice = async(req , res)=>{
    const inputData = req.params.id;
    const dataBody = req.body;
    try {
        const data = await reformNotice(inputData, dataBody);
        res.status(201).json({
            ok: true,
            path: '/notice',
            msg: 'actualizar',
            category: data
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            path: '/notice',
            msg: 'error al actualizar',
            
        })
      }
}
const deleteNotie = async(req , res)=>{
    const inputData = req.params.id;
   try {
    const data = await removeNotice(inputData);
    res.status(200).json({
        ok: true,
        path: '/notice',
        msg: 'elimina',
        category: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/notice',
        msg: 'error al eliminar',
        
    })
   }
}

module.exports = {
    getAllNotice,
    createNotice,
    updateNotice,
    deleteNotie
}