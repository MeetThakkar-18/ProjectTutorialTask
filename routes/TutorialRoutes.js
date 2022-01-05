const express = require('express');
const TutorialController = require('../controllers/TutorialController');

const router = express.Router();

//  const validator = require('../validators/validate')

router.get('/search/:title', TutorialController.findTutorial);
router.get('/', TutorialController.getTutorial);
router.get('/sorting/sortdesc', TutorialController.getsortTutorial);
router.put('/put/:id', TutorialController.putTutorial);
router.post('/post', TutorialController.postTutorial);
router.delete('/delete/:id', TutorialController.deleteTutorial);

// router.get("/tutorials",validator.createTutorialValidator,createTutorials);

module.exports = router;
