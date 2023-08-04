const { Router } = require( 'express' );
const { getAllNotice, createNotice, updateNotice, deleteNotice,  } = require('../controllers/notice.controller');


const router = Router();

router.get( '/', getAllNotice);
router.post( '/', createNotice);
router.patch( '/:id',updateNotice );
router.delete( '/:id', deleteNotice);

module.exports = router;