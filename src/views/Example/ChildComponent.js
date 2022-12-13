import React from "react";

class ChildComponent extends React.Component {
    render() {
        // let name = this.props.name;
        // let age = this.props.age;

        //Gõ tắt
        let { name, age, address, arrJobs } = this.props;
        return (
            <>
                <div className="job-list">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;