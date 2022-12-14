import React from "react";

// class Component
class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {
        // let name = this.props.name;
        // let age = this.props.age;

        //Gõ tắt
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {!showJob ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
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
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

//function component
// const ChildComponent = (props) => {
//     let { arrJobs } = props
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;