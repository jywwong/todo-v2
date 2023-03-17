import React from 'react';
import {Checkbox, ListItem, Typography, Button} from '@mui/material';
import {VscChromeClose} from "react-icons/vsc";

function Todo({todo, toggleComplete, removeTodo}){
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo (todo.id);
    }
return (
<ListItem style={{display:"flex"}}>
<Checkbox checked={todo.completed} onClick={handleCheckboxClick}/>
<Typography varient = "body1"
style ={{
    color: "#282c34",
    fontSize: 18,
    textDecoration: todo.completed ? "line-through" : null
}}
>
    {todo.task}
</Typography>
<Button onClick={handleRemoveClick}>
    <VscChromeClose size={15}/>
    </Button>
</ListItem>
);
}

export default Todo;