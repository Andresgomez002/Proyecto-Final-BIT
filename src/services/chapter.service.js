const Chapter = require("../models/Chapter")

const getChapters = async ()=>{
 return await Chapter.find({})
}
const insertChapter = async (chapter)=>{
    return await Chapter.create(chapter)
}
const reformChapter = async (chapterId, updateData)=>{
    return await Chapter.findOneAndUpdate(
        {_id: chapterId},
        updateData,
        {new: true}
        )
}
const removeChapter = async (chapterId)=>{
    return await Chapter.findOneAndRemove({_id: chapterId})
}

module.exports = {
    getChapters,
    insertChapter,
    reformChapter,
    removeChapter
}