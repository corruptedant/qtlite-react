import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { AccountContext } from '../contexts/accounts'
import DebitCreditTable from '../components/DebitCreditTable/DebitCreditTable'

function AccountDetail() {
    let params = useParams()
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
    const currentAccount = state.accounts?.find(
        (acc) => acc.id == params.accountId
    )
    return (
        <>
            <Navbar />
            <div className="main-color flex  flex-col items-center">
                {currentAccount === undefined ? (
                    <h2 className="text-2xl">Loading...</h2>
                ) : (
                    <>
                        <h2 className="text-6xl">{currentAccount.name}</h2>
                        <h3 className="text-3xl pt-3">
                            RM {currentAccount.amount}
                        </h3>
                        <DebitCreditTable account={currentAccount} />
                    </>
                )}
            </div>
        </>
    )
}

export default AccountDetail
