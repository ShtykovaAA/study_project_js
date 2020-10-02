// Телефонная книга
var phoneBook = {};
//ключ - это имя контакта, а ему сопоставляется номера

//Если хранить объектом, где ключ – это контакт, то такой проблемы не будет.
// Или phoneBook = {contact1, contact2 ...}, где contact = {name, phone ...}
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */


module.exports = function (command) {
  var parser = command.split(' ');
  var commandName = parser[0];

  if (commandName == 'ADD'){
    var name = parser[1];
    var phones = parser[2].split(',');
    return add(name, phone);
  }
  if (commandName == 'REMOVE_PHONE'){
    var phone = parser[1];
    var keys = Object.keys(phoneBook);
    return remove_phone(keys, phone);
  }
  else{
    var keys = Object.keys(phoneBook);
    return show(keys);
  }



  function add(name, phone){
    if (phoneBook.hasOwnProperty(name) == false){   //если еще нет такого контакта
      return phoneBook[name] = phones;
    }
    else{
      for (var i = 0; i < phones.length; i++){   //уже сущетсвует
        var phone = phones[i];
        if (phoneBook[name].indexOf(phone) == -1){  //если нет такого телефона у данного контакта
           phoneBook[name].push(phone);
        }
      }
      return;
     }
   }

   function remove_phone(keys, phone){
     for (var i = 0; i < keys.length; i++){
       var key = keys[i];
       var value = phoneBook[key];
       var index = value.indexOf(phone);
       if (index != -1){
         value.splice(index, 1);
         if (value.length == 0){
           delete phoneBook[key];
         }
         return true;
       }
     }
     return false;
   }

   function show(keys){
     var result = [];
     for (var i = 0; i < keys.length; i++){
       var key = keys[i];
       var value = phoneBook[key];
       result.push(key + ': ' + value.join(', '));
     }
     result.sort();
     return result;
   }

};
