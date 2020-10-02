/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  var result = '', temp = 0;
  minutes += interval;
  if (minutes >= 60){
    hours += Math.floor(minutes / 60);
    minutes -=  Math.floor(minutes / 60) * 60;
    while (hours >= 24){
      hours -= 24;
    }
  }
  if (hours < 10){
    result = '0' + String(hours);
  }
  else{
    result += String(hours);
  }
  result += ':';
  if (minutes < 10){
    result += '0' + String(minutes);
  }
  else{
    result += String(minutes);
  }
  return result;
};
