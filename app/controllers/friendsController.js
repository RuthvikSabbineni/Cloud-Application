const Service = require('../services');

const getFriends = (req, res) => {
    console.log('Hit the Friends Controller: get friends');
    Service.FriendsService.getFriends(req, res);
}

const addFriend = (req, res) => {
    console.log('Hit the Friends Controller: add friend');
    Service.FriendsService.addFriend(req, res);
}

const removeFriend = (req, res) => {

}

const createFriendsList = (req, res) => {
    
}


module.exports = { getFriends, addFriend }