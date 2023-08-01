const { Schema, model } = require( 'mongoose' );

const chapterSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        mangaId: {
            type: String,
            required: true
        }, 
        archivos: [
            {
              type: String,
              required: true,
            },
          ],
        pages: {
            type: Number,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const ChapterModel = model( 'capitulo', chapterSchema  );


module.exports = ChapterModel;
