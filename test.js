var test = require("tape");
var logic = require("./logic");

test("mark test", function(t) {
  var array = [
    { description: "Task1", id: 1, done: false },
    { description: "Task2", id: 2, done: false },
    { description: "Task3", id: 3, done: false },
    { description: "Task4", id: 4, done: false }
  ];
  var id = 1;

<<<<<<< HEAD
  var actual = logic.markTodo(array, id);
  var expected = [
    { description: "Task1", id: 1, done: true },
    { description: "Task2", id: 2, done: false },
    { description: "Task3", id: 3, done: false },
    { description: "Task4", id: 4, done: false }
  ];
  t.deepEqual(actual, expected, "success text");
  t.end();
});
=======


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
>>>>>>> a2e9c8067b601a34b90d471e3d95ea84bcdee18e
