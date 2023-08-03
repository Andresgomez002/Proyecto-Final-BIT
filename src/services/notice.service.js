const Notice = require("../models/notice")

const getNotices = async ()=>{
 return await Notice.find({})
}
const insertNotice = async (notice)=>{
    return await Notice.create(notice)
}
const reformNotice = async (noticeId, updateData)=>{
    return await Notice.findOneAndUpdate(
        {_id: noticeId},
        updateData,
        {new: true}
        )
}
const removeNotice = async (noticeId)=>{
    return await Notice.findOneAndRemove({_id: noticeId})
}

module.exports = {
    getNotices,
    insertNotice,
    reformNotice,
    removeNotice
}