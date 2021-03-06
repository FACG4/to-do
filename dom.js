// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application





(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = []; // this is our initial todoList

  if(localStorage.getItem("a")== null){
    state=[];
    } else{
      state=localStorage.getItem("a")
      state=JSON.parse(state);
    
    }
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    // you will need to use addEventListener

    // add span holding description

    var span = document.createElement("span");
    span.textContent = todo.description;
    // this adds the delete button
    todoNode.appendChild(span);
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.className = "delete";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);


    // add markTodo button
    var doneButton = document.createElement("button");
    doneButton.textContent = "done";
    doneButton.className = "done";

    doneButton.addEventListener("click", function(event) {
      var doneState = todoFunctions.markTodo(state, todo.id);

      update(doneState);
    });
    todoNode.appendChild(doneButton);
    if (todo.done == true) {
      span.className = "spanDone";
    }
    // sortTodos
    // var sortState = todoFunctions.sortTodos(state);
    // update(sortState);
    // console.log(state);
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      var descr = document.getElementsByName("description")[0].value;
      event.target[0].value = "";
      if (descr.trim().length > 0) {
        var newState = todoFunctions.addTodo(state, descr); // ?? change this!

        update(newState);
      }
      else {
        alert('You should write todo');
      }

    });
  };

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));

    });
   
    localStorage.setItem("a",JSON.stringify(state));


    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
