import React from 'react'
import {Todoitem} from './Todoitem'

export const Todos = (props) => {
    let containers = {
        top: "90vh",
        
    }
    return (
        <div className="main-container" style={containers}>
            <h3 className="todoslist text-center">Todoslist</h3>
            <div className="todo">
            {props.todo.length===0? <h6 className="text">--No Todos item show--</h6>:
            
            props.todo.map((todo)=>{
                
            return( 
            <>
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
            </>

             );
            })}
            </div>
        </div>

    )
};

