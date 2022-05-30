const express = require('express');
const router = express.Router();

const TimelineController = require('../controllers/timelineController');
// const controller = new TimelineController();

router.get('/', (req, res) => {
    /* If JWT present, send to timeline... */
    console.log('Hit the Timeline Router');
    TimelineController.getTimeline(req, res);
    /* If JWT not present, send to login... */
})

router.get('/:id', (req, res) => {
    // controller.getTimeline(req, res);
    console.log('Hit the Timeline Router');
    TimelineController.getTimeline(req, res);
});

module.exports = router;