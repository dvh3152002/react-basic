import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClickAdd = (todo) => {
        if (!this.state.title) {
            toast.error('Title is empty!');
            return;
        }
        todo = {
            id: Math.random(Math.floor() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
        toast.success("Add successful!")
    }

    render() {
        return (
            <div className="todo-content">
                <input type='text' value={this.state.title} onChange={(event) => this.handleChange(event)}></input>
                <button className="add" onClick={() => this.handleOnClickAdd()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;