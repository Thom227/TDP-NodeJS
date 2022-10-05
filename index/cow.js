const cows = require('cowsay');


const cowTalk = (text) =>{
    console.log(cows.say({
    'text': text
    }))
};

module.exports = {cowTalk};