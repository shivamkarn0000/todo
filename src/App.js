
import './App.css';
import Header from "./components/Header";
import { Todos } from "./components/Todos"
import Footer from "./components/Footer";
import { Addtodo } from "./components/Addtodo";
import { About } from "./components/About";
import { Contact } from "./components/Contact";


import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const onDelete = (todo) => {

    console.log('I am a Delete', todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    // localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addtodo = (title, desc) => {

    console.log('Successfully Add-Todo', { title, desc })

    let sno = todos.length;

    if (todos.length === 0) {
      sno = 1;
    }

    else {
      //define sno. 1 to start continue
      sno = todos[todos.length - 1].sno + 1;
    };


    //define todos title,desc//
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    //add todo//
    setTodos([...todos, mytodo]);

    console.log(mytodo);


  };

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const [todos, setTodos] = useState(initTodo);
  // [
  //   {
  //   sno: 1,
  //   title: "go to the market",
  //   desc: "go to the market and shop good1"
  //   }
  // ]

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);


  return (
    <>
      <Router>
        <Header title="My Todo List" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todo={todos} onDelete={onDelete} />
                <Footer />
              </>
            )
          }}>

          </Route>

          <Route exact path="/about" render={() => {
            return (
              <>
                <About />
                <Footer />
              </>
            );
          }}>

          </Route>

          <Route exact path="/contact">
            <Contact />
            <Footer />
          </Route>

        </Switch>

        {/* always render components, write <switch/> first or </switch> last */}
      </Router>
    </>

  );
}

export default App;
