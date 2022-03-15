import { useContext, useEffect } from 'react'
import { AccountContext } from '../contexts/accounts'

import Home from '../components/Home'
import Navbar from '../components/Navbar'

function HomeMain() {
    const [state, dispatch] = useContext(AccountContext)
    useEffect(() => {
        const getAccounts = async () => {
            await fetch(`/api/v1/accounts`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch({ type: 'setAccounts', payload: data })
                })
        }
        if (state.accounts === null) {
            getAccounts()
        }
    }, [state, dispatch])
    return (
        <>
            <Navbar />
            {state.accounts && <Home />}
        </>
    )
}

export default HomeMain
