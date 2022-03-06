import TableItem from './TableItem'

function DebitCreditTable({ account }) {
    return (
        <table className="border-2-black">
            <thead className="border-2-black">
                <tr>
                    <th className="border-2-black px-6">Date</th>
                    <th className="border-2-black px-24">Details</th>
                    <th className="border-2-black px-6">Debit</th>
                    <th className="border-2-black px-6">Credit</th>
                    <th className="border-2-black px-6">Balance</th>
                </tr>
            </thead>
            <tbody>
                <TableItem />
                <TableItem />
                <TableItem />
            </tbody>
        </table>
    )
}

export default DebitCreditTable
