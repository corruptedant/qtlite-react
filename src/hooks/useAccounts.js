import React, { useReducer, useEffect } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'addAccount':
            return [action.payload, ...state]
        case 'setAccount':
            return [action.payload]
        default:
            throw new Error()
    }
}

export function useAccounts() {
    const [accounts, dispatch] = useReducer(reducer, null)
    async function getAccounts() {
        await fetch('/api/accounts')
            .then((res) => res.json())
            .then((data) => data.value)
    }

    useEffect(() => {
        if (accounts === null)
            dispatch({ type: 'setAccount', payload: getAccounts() })
    })
    return [accounts, dispatch]
}
