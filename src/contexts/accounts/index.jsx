import React from 'react'
import { reducer, initialState } from './reducer'

export const AccountContext = React.createContext({
    state: initialState,
    dispatch: () => null,
})

export const AccountsProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <AccountContext.Provider value={[state, dispatch]}>
            {children}
        </AccountContext.Provider>
    )
}
