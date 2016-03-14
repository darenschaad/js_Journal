(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var entry = require('./entry-constructor.js');

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    debugger;
    var title = $('#title').val();
    var body = $('#body').val();
    var entryObject = new entry.Entry(title, body);
    var wordCount = entryObject.countWords();
    $('#entries').append("<li> title:" + title + " body: " + body + " word count: " + entryObject.countWords() + "</li>");
  });
});

},{"./entry-constructor.js":2}],2:[function(require,module,exports){
function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(){
  var bodyArray = this.body.split(" ");
  var titleArray = this.title.split(" ");
  return bodyArray.length + titleArray.length;
}

module.exports.Entry = Entry;

},{}]},{},[1]);
