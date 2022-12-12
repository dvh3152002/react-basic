import React from "react";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    /*
        JSX => return 1 block
    */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        console.log(this.state)
        alert('click button')
    }

    render() {
        return (
            // <React.Fragment></React.Fragment>=> gõ đầy đủ
            // gõ tắt
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => { this.handleChangeFirstName(event) }} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => { this.handleChangeLastName(event) }} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => { this.handleClick(event) }} />
                </form>
            </>
        )
    }
}

export default MyComponent;