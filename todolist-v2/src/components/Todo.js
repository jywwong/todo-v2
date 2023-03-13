import React from 'react';

function Todo({todo, toogleComplete, removeTodo}){
    function handleCheckbox(){
        toogleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo (todo.id);
    }
return (
<div style={{display:"flex"}}>
<input type="checkbox" onClick={handleCheckbox}/>
<li
style ={{
    color: "white",
    textDecoration: todo.completed ? "line-through" : null
}}
>
    {todo.task}
</li>
<button onClick={handleRemoveClick}>X</button>
</div>
);
}

export default Todo;