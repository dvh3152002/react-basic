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

    handleOnClickDelete = (user) => {
        console.log('user ', user)
        this.props.deleteUserRedux(user)
    }

    handleOnClickCreate = () => {
        this.props.createUserRedux()
    }

    render() {
        let { dataRedux } = this.props;
        console.log("check props ", dataRedux)
        return (
            <>
                <div>
                    Hello world
                </div>
                <div>
                    <img src={logo} />
                </div>
                {dataRedux && dataRedux.length > 0 &&
                    dataRedux.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                &nbsp;<span onClick={() => this.handleOnClickDelete(item)}>x</span>
                            </div>
                        )
                    })
                }
                <div><button onClick={() => this.handleOnClickCreate()}>Create</button></div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));