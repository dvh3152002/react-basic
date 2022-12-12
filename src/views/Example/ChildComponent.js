import React from "react";

class ChildComponent extends React.Component {
    render() {
        // let name = this.props.name;
        // let age = this.props.age;

        //Gõ tắt
        let { name, age } = this.props;
        return (
            <>
                <div>
                    Child Component {name}-{age}
                </div>
            </>
        )
    }
}

export default ChildComponent;