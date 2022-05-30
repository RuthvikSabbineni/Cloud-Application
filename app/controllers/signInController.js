let Service = require("../services");

const getSignIn = (res) => {
    console.log('in signInController')
    Service.signInService.getSignIn(res)
}

const postSignIn = (req,res) => {
    console.log('in signInController')
    Service.signInService.postSignIn(req,res)
}

module.exports = {
    getSignIn, postSignIn
}