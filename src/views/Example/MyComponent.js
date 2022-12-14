import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: '1', title: 'Developer', salary: '500$' },
            { id: '2', title: 'Tester', salary: '700$' },
            { id: '3', title: 'Manager', salary: '1000$' },
        ]
    }

    /*
        JSX => return 1 block
    */

    render() {
        return (
            // <React.Fragment></React.Fragment>=> gõ đầy đủ
            // gõ tắt
            <>
                <AddComponent />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;