export const reducer = (state, action) => {
    switch (action.type) {
        case 'addAccounts':
            return { accounts: [action.payload, ...state] }
        case 'setAccounts':
            return { accounts: action.payload }
        default:
            throw new Error()
    }
}

export const initialState = {
    accounts: null,
}
