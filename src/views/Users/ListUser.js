import React from "react";
import axios from "axios";
import './ListUser.scss'
import withRouter from "../HOC/withRouter";

class ListUser extends React.Component {
    state = {
        listUser: []
    }

    async componentDidMount() {
        // c1
        // axios.get('https://reqres.in/api/users?page=1').then(res => {
        //     console.log('check list user', res)
        // })

        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res.data.data
        })
    }

    handleOnClickViewUser(user) {
        this.props.router.navigate(`/user/${user.id}`)
    }

    render() {
        let { listUser } = this.state
        return (
            <div className="list-user-container">
                <div className="title">List User</div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.handleOnClickViewUser(item)}>
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);