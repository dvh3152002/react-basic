const initState = {
    users: [
        { id: '1', name: 'dsfns' },
        { id: '2', name: 'sdfsd' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let { users } = state
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100000);
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer