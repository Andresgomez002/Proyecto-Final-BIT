const { getComment, insertComment, reformComment, removeComment } = require("../services/commets.service");




const getAllComment = async(req , res)=>{
   try {
    const data = await getComment()
    res.status(200).json({
        ok: true,
        path: '/comment',
        msg: 'obtener',
        products: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/comment',
        msg: 'error al obtener',
        
    })
   }
}
const createComment = async(req , res)=>{
    const inputData = req.body;
  try {
    const data = await insertComment(inputData);
    res.status(201).json({
        ok: true,
        path: '/commets',
        msg: 'crear',
        category: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/comment',
        msg: 'error al crear',
        
    })
  }
}
const updateComment = async(req , res)=>{
    const inputData = req.params.id;
    const dataBody = req.body;
    try {
        const data = await reformComment(inputData, dataBody);
        res.status(201).json({
            ok: true,
            path: '/comment',
            msg: 'actualizar',
            category: data
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            path: '/comment',
            msg: 'error al actualizar',
            
        })
      }
}
const deleteComment = async(req , res)=>{
    const inputData = req.params.id;
   try {
    const data = await removeComment(inputData);
    res.status(200).json({
        ok: true,
        path: '/comment',
        msg: 'elimina',
        category: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/comment',
        msg: 'error al eliminar',
        
    })
   }
}

module.exports = {
    getAllComment,
    createComment,
    updateComment,
    deleteComment
}