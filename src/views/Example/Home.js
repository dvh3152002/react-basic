import React from "react";
import withRouter from "../HOC/withRouter";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo.png"
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     console.log('check timeout')
        //     // this.props.navigate('/todos')(Hook)
        //     // this.props.history.push('/todos')(v5)
        // }, 3000)
    }

    render() {
        console.log("check props ", this.props)
        return (
            <>
                <div>
                    Hello world
                </div>
                <div>
                    <img src={logo} />
                </div>
            </>
        )
    }
}

const mapStateProps = (state) => {
    return {
        data: state.users
    }
}

export default connect(mapStateProps)(Color(Home));