import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import NavigBar from "./components/NavigBar";
import TodoList from "./components/TodoList";
function App() {
  return (
    <>
    <NavigBar/>
    <TodoList/>
    <Form/>
  </>
  );
}
export default App;