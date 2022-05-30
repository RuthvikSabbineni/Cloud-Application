const Service = require('../services');

const getTimeline = (req, res) => {
    console.log('Hit the Timeline Controller');
    Service.TimelineService.getTimeline(req, res);
}

module.exports = { getTimeline }