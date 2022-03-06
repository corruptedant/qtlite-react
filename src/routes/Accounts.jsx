import { useContext, useEffect } from 'react'
import { AccountContext } from '../contexts/accounts'
import AccountsList from '../Components/AccountsList/AccountsList'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'

function Accounts() {
    const [state, dispatch] = useContext(AccountContext)
    useEffect(() => {
        const getAccounts = async () => {
            await fetch(`/api/accounts`)
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
            <div className="flex flex-col items-center">
                <div className="relative">
                    <h1 className="text-4xl mt-2">Accounts</h1>
                    <SearchBar />
                    {state.accounts === null ? (
                        <h1>Loading...</h1>
                    ) : (
                        <AccountsList accounts={state.accounts} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Accounts
