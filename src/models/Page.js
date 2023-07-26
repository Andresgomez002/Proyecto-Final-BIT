const { Schema, model } = require( 'mongoose' );

const PageSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        mangaId: {
            type: String,
            required: true
        },
        capituloId: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const PageModel = model( 'page', PageSchema  );


module.exports = PageModel;