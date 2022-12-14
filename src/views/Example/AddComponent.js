import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        console.log(this.state)
        alert('click button')
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job's Title:</label><br />
                <input type="text" value={this.state.titleJob} onChange={(event) => { this.handleChangeTitleJob(event) }} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => { this.handleChangeSalary(event) }} /><br /><br />
                <input type="submit" value="Submit" onClick={(event) => { this.handleClick(event) }} />
            </form>
        )
    }
}

export default AddComponent;