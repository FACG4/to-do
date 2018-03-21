
var test = require('tape');
var logic = require('./logic');

test('Sort test', function(t) {
  var actual = logic.sortTodos([3, 2, 1]);
  var expected = [1, 2, 3];
  t.deepEqual(actual, expected, actual + " should turn into " + expected);
  t.end();
});
