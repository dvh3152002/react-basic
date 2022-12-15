import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: '1', title: 'Doing Homework' },
            { id: '2', title: 'Coding' },
            { id: '3', title: 'Watching' },
        ]
    }

    addNewTodo = (todo) => {
        // let currentTodo = this.state.listTodo;
        // currentTodo = currentTodo.push(todo);

        this.setState({
            listTodo: [...this.state.listTodo, todo]
            // listTodo: currentTodo
        })
    }

    render() {
        let { listTodo } = this.state
        return (
            <div className="todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                {listTodo && listTodo.length > 0 &&
                    listTodo.map((item, index) => {
                        return (
                            <div className="todo-list">
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}  </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ListTodo;