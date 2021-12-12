import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo(todo, update, remove) {
  const [isEditing, setIsEditing] = useState(false);
  console.log({todo, isEditing})
  /** Toggle if this is being edited */
  function toggleEdit() { 
    setIsEditing(!isEditing)
  }

  /** Call remove fn passed to this. */
  function handleDelete() { 
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { 
    update(todo);
    toggleEdit()
  }
  return (
    <div className="EditableTodo">

      <div className="mb-3">
        {!isEditing &&
          <div className="float-right text-sm-right">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
            <Todo
            id={todo.todo.id}
            title={todo.todo.title}
            description={todo.todo.description}
            priority={todo.todo.priority}
          />
          </div>}
        {isEditing &&
          <TodoForm todo={todo} handleSave={handleSave}/>
        }
      </div>

    </div>
  );
}

export default EditableTodo;
