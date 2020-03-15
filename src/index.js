import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

const root = document.querySelector("#root");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    root
);