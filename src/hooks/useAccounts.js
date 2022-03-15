import { useContext, useEffect } from 'react'
import { AccountContext } from '../contexts/accounts'

export function useAccounts() {
    const [state, dispatch] = useContext(AccountContext)

    const fetchAccounts = async () => {
        await fetch(`/api/v1/accounts`)
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'setAccounts', payload: data })
            })
    }

    return [state, dispatch]
}
