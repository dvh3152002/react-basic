import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job's Title:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => { this.handleChangeTitleJob(event) }} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => { this.handleChangeSalary(event) }} /><br /><br />
                <input type="submit" value="Submit" onClick={(event) => { this.handleClick(event) }} />
            </form>
        )
    }
}

export default AddComponent;