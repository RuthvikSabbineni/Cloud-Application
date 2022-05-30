let Service = require("../services");

const getSearch = (req,res) => {
    console.log('in searchController')
    Service.searchService.getSearch(req,res)
}

const postSearch = (req,res) => {
    console.log('in searchController')
    Service.searchService.postSearch(req,res)
}

module.exports = {
    getSearch, postSearch
}