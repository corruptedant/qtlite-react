import axios from 'axios'
import { useContext } from 'react'

import { AccountContext } from '../../contexts/accounts'

import { useAuth } from '../../hooks/useAuth'
import MakeDebitCredit from './MakeDebitCredit'

import { destructureAxios } from '../../utils/utils'
import BigNumber from 'bignumber.js'

function Home() {
    const auth = useAuth()
    const [state, dispatch] = useContext(AccountContext)

    const activeLoans = state.accounts.filter((acc) => acc.amount > 0)
    const totalLoan = activeLoans
        .map((acc) => parseInt(acc.amount))
        .reduce((acc, curr) => acc + curr, 0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        // Grab the hidden input checkbox from the form
        // and perform a boolean operation ("on"/false is Credit, "off"/true is Debit)
        const isDebit = e.target.querySelector('#isDebit').checked
        const { account, date, desc, amount } = formData
        const data = {
            account,
            date,
            description: desc,
        }
        data[isDebit ? 'debit' : 'credit'] = amount
        console.log({ data })
        const [res, err] = await destructureAxios(
            axios.post(
                `/api/v1/${isDebit ? 'debit' : 'credit'}`,
                data,
                auth.getConfig()
            )
        )
        if (res) {
            const accounts = state.accounts.slice()
            const account = accounts.find((acc) => acc.id === res.data.account)
            console.log({ account }, { accounts })
            if (isDebit) {
                account['debits'] = [...account.debits, res.data]
                account['amount'] = BigNumber(account['amount']).plus(
                    res.data.debit
                )
            } else {
                account['credits'] = [...account.credits, res.data]
                account['amount'] = BigNumber(account['amount']).minus(
                    res.data.credit
                )
            }
            return dispatch({ type: 'setAccounts', payload: accounts })
        }
        // else
        console.error('Did not made shit up', err)
    }
    return (
        <div className="main-color flex justify-center">
            <div className="flex flex-col justify-start h-screen">
                <MakeDebitCredit
                    accounts={state.accounts}
                    handleSubmit={handleSubmit}
                />
                <div className="">
                    <p>
                        You loaned out RM {totalLoan} to {activeLoans.length}{' '}
                        people.
                    </p>
                </div>
                <div className="">
                    <p>
                        Account with the highest hutang is John Smith with RM
                        350.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
