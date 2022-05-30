const Service = require('../services');

/* REMOVE BEFORE SUBMIT */
const getAllProfiles = (req, res) => {
    console.log('Hit the Profile Controller');
    Service.ProfileService.getAllProfiles(req, res);
}

const getProfile = (req, res) => {
    console.log('Hit the Profile Controller');
    Service.ProfileService.getProfile(req, res);
}

const getUsersProfile = (req, res) => {
    console.log('Hit the Profile Controller');
    Service.ProfileService.getProfile(req, res);
}

module.exports = { getAllProfiles, getProfile, getUsersProfile }
