const Page = require("../models/Page")

const getPages = async ()=>{
 return await Page.find({})
}
const insertPage = async (page)=>{
    return await Page.create(page)
}
const reformPage = async (pageId, updateData)=>{
    return await Page.findOneAndUpdate(
        {_id: pageId},
        updateData,
        {new: true}
        )
}
const removePage = async (pageId)=>{
    return await Page.findOneAndRemove({_id: pageId})
}

module.exports = {
    getPages,
    insertPage,
    reformPage,
    removePage
}