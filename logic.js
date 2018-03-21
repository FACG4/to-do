// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd
var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    var todos2 = todoFunctions.cloneArrayOfObjects(todos);
    var obj ={id:todoFunctions.generateId(),description:newTodo,done: false}; 
   todos2.push(obj);
   return todos2;
  },


  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
<<<<<<< HEAD
    /*var todo1 = todoFunctions.cloneArrayOfObjects(todos);
    todo1=todo1.filter(function(todo){
        return todo!=idToDelete;*/
        var arr = todoFunctions.cloneArrayOfObjects(todos);
        return arr.filter(function(todo){
          return idToDelete!== todo.id
        });
=======
    var todos2 = todoFunctions.cloneArrayOfObjects(todos);
    return  todos2.filter(function(todo){
       return idToDelete !== todo.id;
      })
>>>>>>> 970928474bf75a805b88b84d4f027218bab1fa8d

  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortTodos: function(todos, sortFunction) {
    var sortArr = todoFunctions.cloneArrayOfObjects(todos);
    return sortArr.sort();
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};


module.exports= todoFunctions;

