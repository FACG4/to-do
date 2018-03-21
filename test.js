
var test = require('tape');
var logic = require('./logic');


test('Delete to do list test', function(t) {
  t.pass();
  t.end();
});
test('Delete to do list test', function(t) {
  var array = [{id: 1, description: "eat", done: false},{id : 2, description: "drink", done: false}];
  var a=logic.deleteTodo(array,2);
  var e=[{id: 1, description: "eat", done: false}];
  t.deepEqual(a,e, a + ' equal ' + e);
  t.end();
});

test('Sort test', function(t) {
  var actual = logic.sortTodos([3, 2, 1]);
  var expected = [1, 2, 3];
  t.deepEqual(actual, expected, actual + " should turn into " + expected);
  t.end();
});
 
