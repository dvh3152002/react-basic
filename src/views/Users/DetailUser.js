import React from "react";
import withRouter from "../HOC/withRouter";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        console.log('check props', this.props.router)
        let res = await axios.get(`https://reqres.in/api/users/${this.props.router.params.id}`)
        this.setState({
            user: res.data.data
        })
    }

    handleOnClickBack = () => {
        this.props.router.navigate('/user')
    }

    render() {
        let { user } = this.state
        let checkObjEmpty = Object.keys(user).length === 0
        return (
            <>
                {
                    !checkObjEmpty &&
                    <>
                        <div>Name: {user.first_name} {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <img src={user.avatar} />
                        <div><button onClick={() => this.handleOnClickBack()}>Back</button></div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);