const { Router } = require( 'express' );
const { getAllPages, createPage, updatePage, deletePage } = require('../controllers/page.controller');

const router = Router();

router.get( '/', getAllPages);
router.post( '/', createPage);
router.patch( '/:id', updatePage);
router.delete( '/:id', deletePage);

module.exports = router;