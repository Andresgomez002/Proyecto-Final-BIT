const { Router } = require( 'express' );
const { getAllComment, createComment, updateComment, deleteComment } = require('../controllers/comment.controller');



const router = Router();

router.get( '/', getAllComment);
router.post( '/', createComment);
router.patch( '/:id',updateComment);
router.delete( '/:id', deleteComment);

module.exports = router;