
var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  var actual = logic.addTodo([], "eat");
  var expect = [{id:1,description:"eat",done:false}]
  t.deepEqual(actual, expect, "should become");
  t.end();
});


var todos=[{id:0,description:'sleeep',done:false}];
test('Example test', function(t) {
  var actual = logic.addTodo(todos, "eat");
  var expect = [{id:0,description:'sleeep',done:false},{id:2,description:"eat",done:false}]
  t.deepEqual(actual, expect, "should become");
  t.end();
});

var todos1 = [{id:0,description:'run',done:false}];
test('Example test',function(t){
  var actual = logic.addTodo(todos1,"cook");
  var expect = todos1.concat([{id:3,description:'cook',done:false}])
  t.deepEqual(actual, expect, "should become");
  t.end();

});
 

var todelet = [{id:0,description:'run',done:false}];
test('Example test',function(t){
  var actual = logic.deleteTodo(todelet,0);
  var expect = [];

  t.deepEqual(actual, expect, "should delet obj");
  t.end();

});

var todelet = [{id:0,description:'run',done:false}];
test('Example test',function(t){
  var actual = logic.deleteTodo(todelet,2);
  var expect = todelet ;

  t.deepEqual(actual, expect, "should delet obj");
  t.end();

});
 



