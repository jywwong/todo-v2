import React from 'react';

function Todo({todo, toogleComplete}){
    function handleCheckbox(){
        toogleComplete(todo.id);
    }
return (
<div style={{display:"flex"}}>
<input type="checkbox" onClick={handleCheckbox}/>
<li
style ={{
    color: "white",
    textDecoration: Todo.completed ? "line-through" : null
}}
>{todo.task}</li>
<button>X</button>
</div>
);
}

export default Todo;