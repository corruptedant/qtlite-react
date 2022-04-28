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
    const transactions = generateTransactionTable(account).reverse()
    return (
        <>
            <form id="add_transaction"></form>
            <table className="w-full md:w-7/12 lg:w-6/12">
                <thead>
                    <tr>
                        <th
                            colSpan={3}
                            className="border-b border-gray-400 text-left pl-2 text-lg"
                        >
                            Transaction Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tran) => (
                        <TableItem key={tran.id} transaction={tran} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DebitCreditTable
