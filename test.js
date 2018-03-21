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
