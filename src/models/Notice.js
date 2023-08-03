const { Schema, model } = require( 'mongoose' );

const NoticeSchema = new Schema(

    {
        titulo: {
            type: String,
            required: true
        },
        subtitulo: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: false
        },
        descripcion: {
            type: String,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const NoticeModel = model( 'Notices', NoticeSchema  );


module.exports = NoticeModel;