const { Router } = require( 'express' );
const { getAllChapters, createChapter, updateChapter, deleteChapter } = require('../controllers/chapter.controller');

const router = Router();

router.get( '/', getAllChapters);
router.post( '/', createChapter);
router.patch( '/:id', updateChapter);
router.delete( '/:id', deleteChapter);

module.exports = router;