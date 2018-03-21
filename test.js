
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
 





test('Sort test', function(t) {
  var actual = logic.sortTodos([3, 2, 1]);
  var expected = [1, 2, 3];
  t.deepEqual(actual, expected, actual + " should turn into " + expected);
  t.end();
});

