import { useContext, useEffect } from 'react'
import { AccountContext } from '../contexts/accounts'

import Home from '../Components/Home'
import Navbar from '../Components/Navbar'

function App() {
    const [state, dispatch] = useContext(AccountContext)
    useEffect(() => {
        const getAccounts = async () => {
            await fetch(`/api/v1/accounts`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    dispatch({ type: 'setAccounts', payload: data })
                })
        }
        if (state.accounts === null) {
            console.log({ state })
            getAccounts()
        }
    }, [state])
    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export default App
