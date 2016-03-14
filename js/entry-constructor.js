var moment = require('moment');


function Entry(title, body){
  this.title = title;
  this.body = body;
  creationDate = moment().format("MMM Do YY");
}

Entry.prototype.countWords = function(){
  var bodyArray = this.body.split(" ");
  var titleArray = this.title.split(" ");
  return bodyArray.length + titleArray.length;
};

module.exports.Entry = Entry;
