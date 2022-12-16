import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: '1', title: 'Doing Homework' },
            { id: '2', title: 'Coding' },
            { id: '3', title: 'Watching' },
        ],

        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentTodo = this.state.listTodo;
        // currentTodo = currentTodo.push(todo);

        this.setState({
            listTodo: [...this.state.listTodo, todo]
            // listTodo: currentTodo
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodo
        })
        toast.success("Delete successed")
    }

    handleEditTodo = (todo) => {
        let { listTodo, editTodo } = this.state
        let checkEmpty = Object.keys(editTodo).length === 0
        let currentTodo = [...listTodo]
        if (!checkEmpty && todo.id === editTodo.id) {
            let objIndex = currentTodo.findIndex((obj => obj.id === editTodo.id));
            //Update object's name property.
            currentTodo[objIndex].title = editTodo.title
            this.setState({
                listTodo: currentTodo,
                editTodo: {}
            })
            toast.success("Edit successed")
            return
        }

        this.setState({
            editTodo: todo
        })
    }

    handleChangeTodo = (event) => {
        let editTodoCopy = this.state.editTodo;
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state
        let checkEmpty = Object.keys(editTodo).length === 0
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
                                    {checkEmpty ?
                                        <span>{index + 1} - {item.title}  </span>
                                        :
                                        <>
                                            {item.id === editTodo.id ?
                                                <span>{index + 1} - <input value={item.title} onChange={(event) => this.handleChangeTodo(event)} />  </span>
                                                :
                                                <span>{index + 1} - {item.title}  </span>
                                            }
                                        </>
                                    }

                                    { }
                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {!checkEmpty && item.id === editTodo.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
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