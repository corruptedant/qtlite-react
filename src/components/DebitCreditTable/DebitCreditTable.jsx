import TableItem from './TableItem'

import { BigNumber } from 'bignumber.js'

const generateTransactionTable = function (account) {
    // combine the list
    const transactions = [...account.debits, ...account.credits]

    // sort by date
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date))

    let currAmount = 0
    // increment or decrement depending on the transaction
    // using map
    const updTransactions = transactions.map((tran) => {
        return {
            amount: tran.credit
                ? (currAmount = new BigNumber(currAmount).minus(
                      BigNumber(tran.credit)
                  ))
                : (currAmount = new BigNumber(currAmount).plus(
                      BigNumber(tran.debit)
                  )),
            ...tran,
        }
    })

    return updTransactions
}

function DebitCreditTable({ account }) {
    const transactions = generateTransactionTable(account)
    return (
        <table className="border-2-black">
            <thead className="border-2-black">
                <tr>
                    <th className="border-2-black lg:px-6">Date</th>
                    <th className="border-2-black lg:px-24">Details</th>
                    <th className="border-2-black lg:px-6">Debit</th>
                    <th className="border-2-black lg:px-6">Credit</th>
                    <th className="border-2-black lg:px-6">Balance</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((tran) => (
                    <TableItem key={tran.id} transaction={tran} />
                ))}
            </tbody>
        </table>
    )
}

export default DebitCreditTable
