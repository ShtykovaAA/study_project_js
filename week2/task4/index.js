/**
 * @param {String} tweet
 * @returns {String[]}
 */
 //с помощью сплита разбиваем на массив по разделителю # и потом делаем по startwith

function splitString(tweet, separator){
  return tweet.split(separator);
}
function isHashtag(temp){
  return temp[0] == '#';
}
function hashtag(str){
  return str.slice(1);
}
module.exports = function (tweet) {
  return tweet.split(' ').filter(isHashtag).map(hashtag);
};
