const{ Schema, model } = require ('mongoose');

const commentSchema = new Schema(
    {
        comentario: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: false
        },
        noticeId: {
            type: String,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const commentModel = model( 'comments', commentSchema  );


module.exports = commentModel;