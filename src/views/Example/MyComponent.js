import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: '1', title: 'Developer', salary: '500' },
            { id: '2', title: 'Tester', salary: '700' },
            { id: '3', title: 'Manager', salary: '1000' },
        ]
    }

    /*
        JSX => return 1 block
    */

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            // <React.Fragment></React.Fragment>=> gõ đầy đủ
            // gõ tắt
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    deleteJob={this.deleteJob}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;