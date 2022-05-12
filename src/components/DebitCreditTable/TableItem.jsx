import axios from 'axios'

import { BigNumber } from 'bignumber.js'

import { BackspaceIcon } from '@heroicons/react/solid'
import { useAuth } from '../../hooks/useAuth'
import { destructureAxios } from '../../utils/utils'
import { useContext } from 'react'
import { AccountContext } from '../../contexts/accounts'

function TableItem({ transaction }) {
    const auth = useAuth()
    const [state, dispatch] = useContext(AccountContext)

    const formattedDate = new Date(transaction.date).toLocaleDateString(
        undefined,
        {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }
    )

    const deleteTransaction = async function (transaction) {
        const [res, err] = await destructureAxios(
            axios.delete(
                `/api/v1/${transaction.debit ? 'debit' : 'credit'}/${
                    transaction.id
                }`,
                auth.getConfig()
            )
        )
        if (res) {
            // get accounts, then get the account
            const accounts = state.accounts

            const currAccount = state.accounts.find(
                (acc) => acc.id === transaction.account
            )

            // make updAccount without transaction + updated final balance
            let updDebit = currAccount.debits.slice()
            let updCredit = currAccount.credits.slice()
            if (transaction.debit) {
                updDebit = updDebit.filter((tran) => tran.id !== transaction.id)
            } else {
                updCredit = updCredit.filter(
                    (tran) => tran.id !== transaction.id
                )
            }

            const updAmount = transaction.debit
                ? BigNumber(currAccount.amount).minus(transaction.debit)
                : BigNumber(currAccount.amount).plus(transaction.credit)

            const updAccount = {
                ...currAccount,
                debits: updDebit,
                credits: updCredit,
                amount: updAmount,
            }

            console.log(updAccount)

            // make updAccounts

            const updAccounts = accounts.slice()
            updAccounts.splice(accounts.indexOf(currAccount), 1, updAccount)

            // dispatch setAccounts

            dispatch({ type: 'setAccounts', payload: updAccounts })

            //make toast(after toast available)
            console.log('everything went right!')
        }

        if (err) {
            console.log('I done goofed.')
        }
    }
    return (
        <tr>
            <td className="border-b border-gray-400 p-2">
                {formattedDate}
                <br />
                <span className="text-slate-400">
                    {transaction.description}
                </span>
            </td>
            {/* <td className=" p-2">{transaction.description}</td> */}
            <td
                className={`${
                    transaction.debit ? 'text-green-400' : 'text-red-500'
                } border-b border-gray-400 p-2 text-right`}
            >
                RM {transaction.debit || transaction.credit}
            </td>
            {/* <td className=" p-2">{transaction.credit}</td> */}
            <td className="border-b border-gray-400 p-2 text-center">
                <div className="flex justify-end align-center">
                    <div>RM {transaction.amount.toFixed(4)}</div>
                    <div
                        className="flex items-center px-2 mx-3 text-midnight bg-red-600 hover:bg-red-400 rounded-md"
                        title="Delete Transaction"
                    >
                        <BackspaceIcon
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => deleteTransaction(transaction)}
                        />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TableItem
