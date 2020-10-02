/**
 * @param {String[]} hashtags
 * @returns {String}
 */

module.exports = function (hashtags) {
  if (hashtags.length == 0){
    return '';
  }
  var result = [];
  for (var i = 0; i < hashtags.length; i++){
    var hashtag = hashtags[i].toLowerCase();
    if (result.indexOf(hashtag) == -1){
      result.push(hashtag);
    }
  }
  return result.join(', ');
};
