import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */


function EditableTodoList(todos, update,remove) {
  console.log("editabletodo rendered")
  console.log(todos.todos.length)
  return (
      <div>
        {todos.todos.map(todo => 
        (
        <EditableTodo 
        todo={todo} 
        update={update} 
        remove={remove} 
        key={todo.id}/>
        ))
      }
      </div>
  );
}

export default EditableTodoList;
