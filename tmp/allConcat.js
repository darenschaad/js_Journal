var entry = require('./../js/entry-constructor.js');

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entryObject = new entry.Entry(title, body);
    var wordCount = entryObject.countWords();
    $('#entries').append("<li> title:" + title + " body: " + body + " word count: " + entryObject.countWords() + "This journal entry was created on: " + creationDate + "</li>");
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#emailAddress').append('<h3>Thans for entering your email, ' + email + ', you will now receive spam! </h3>');
  });
});
