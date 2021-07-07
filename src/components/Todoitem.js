
import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
    return (
        
        <div>
            <h6>{todo.sno}</h6>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <div className="btns">
           {<button className="btns my-3 btn-sm btn-danger" onClick = {()=>{onDelete(todo)}}>Delete</button>}
           

           </div>

        </div>
    )
}
