const Comment = require("../models/Comment")

const getComment = async ()=>{
 return await Comment.find({})
}
const insertComment = async (comment)=>{
    return await Comment.create(comment)
}
const reformComment = async (commentId, updateData)=>{
    return await Comment.findOneAndUpdate(
        {_id: commentId},
        updateData,
        {new: true}
        )
}
const removeComment = async (commentId)=>{
    return await Comment.findOneAndRemove({_id: commentId})
}

module.exports = {
    getComment,
    insertComment,
    reformComment,
    removeComment
}