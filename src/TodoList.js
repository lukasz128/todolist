import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            tasks: []
        };
    }

    addItem(e) {
        const itemArray = this.state.tasks;

        if(this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({ tasks: itemArray });
            this._inputElement.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItem = this.state.tasks.filter(item => item.key !== key);
        this.setState({ tasks: filteredItem });
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={a=>this._inputElement = a} placeholder="Wpisz zadanie" />
                        <button type="submit"> Dodaj</button>
                    </form>
                </div>
                <TodoItems entries={this.state.tasks} delete={this.deleteItem} />
            </div>
        );
    }
} 

export default TodoList;