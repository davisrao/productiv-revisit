import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {

  const [todos,setTodos] = useState(initialTodos);
  /** add a new todo to list */
  function create(newData) {
    const newTodo = {...newTodo, id: uuid()}
    setTodos([...initialTodos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    let toUpdate = todos.filter(todo => todo.id === updatedTodo.id);
    
    for(let key in toUpdate[0]){
      toUpdate[0][key] = updatedTodo[key];
    }
    
    toUpdate.title = updatedTodo.title;
  }

  /** delete a todo by id */
  function remove(id) {
    let newTodos = initialTodos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  console.log("here is todos", todos)

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            {todos.length > 0 &&  <EditableTodoList remove={remove} update={update} create={create} todos={todos}/>}
            {todos.length ===0 &&  <span className="text-muted">You have no todos.</span>}
          </div>

          <div className="col-md-6">
            (if no top todo, omit this whole section)
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos}/>
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              FIXME
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;