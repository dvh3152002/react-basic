import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Hiep',
        class: 'K65CNTTB'
    }

    /*
        JSX => return 1 block
    */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert("Click button")
    }

    render() {
        return (
            // <React.Fragment></React.Fragment>=> gõ đầy đủ
            // gõ tắt
            <>
                <div className="first">
                    My Component
                </div>
                <div><input value={this.state.name} type='text' onChange={(event) => this.handleOnChangeName(event)}></input></div>
                <div className="second"> My name is {this.state.name}, My class is {this.state.class}</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click button</button>
                </div>
            </>
        )
    }
}

export default MyComponent;