//keys.js figure out what set of credintials to return

if (process.env.NODE_ENV === 'production'){
    //we are in pro- return prod set of keys
}else{
    //we are in dev return dev keys
    module.exports = require('./dev')
}