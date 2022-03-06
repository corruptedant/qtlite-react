import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import { reducer, initialState } from './reducer'

export const AccountContext = React.createContext({
    state: initialState,
    dispatch: () => null,
})

export const AccountsProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    // useEffect(() => {
    //     if (state === null) {
    //         fetch(`/api/accounts`)
    //             .then((res) => res.json())
    //             .then((data) =>
    //                 dispatch({ type: 'setAccounts', payload: data.value })
    //             )
    //     }
    // })
    return (
        <AccountContext.Provider value={[state, dispatch]}>
            {children}
        </AccountContext.Provider>
    )
}
