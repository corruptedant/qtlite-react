export const reducer = (state, action) => {
    switch (action.type) {
        // HTTP 200 OK of /api/v1/login
        case 'setLogin':
            return {
                id: action.payload.id,
                username: action.payload.username,
                csrftoken: action.payload.csrftoken,
            }
        default:
            throw new Error()
    }
}

export const initialState = {
    id: null,
    username: null,
    csrftoken: null,
}
