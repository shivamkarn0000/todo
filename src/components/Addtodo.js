
import React, { useState } from 'react';


export const Addtodo = ({addtodo}) => {

    const [title, setTitle] =  useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{

        e.preventDefault();
        if(!title || !desc){
            alert ("Title or Description cannot be blank !!")
        }
        //props.addtodo//
        else {
        addtodo(title, desc)
        
        setTitle("");
        setDesc("");
        };

    };

    return (
        <div className="addtodobac">

    <form onSubmit={submit} className="addtodo">

  <div className="mb-3">
      <h2>Add-Todo</h2>

    <label forhtml="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>

  </div>

  <div className="mb-3">

    <label forhtml="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>

  </div>
  <button target="_blank" type="submit" className="btn btn-success">Add Todo</button>
</form>
           
        </div>
    )
}
