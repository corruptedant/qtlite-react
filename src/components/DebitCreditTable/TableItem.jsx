function TableItem({ transaction }) {
    return (
        <tr>
            <td className="border-2-black p-2">{transaction.date}</td>
            <td className="border-2-black p-2">{transaction.description}</td>
            <td className="border-2-black p-2 text-center">
                {transaction.debit}
            </td>
            <td className="border-2-black p-2">{transaction.credit}</td>
            <td className="border-2-black p-2 text-center">
                {transaction.amount.toFixed(4)}
            </td>
        </tr>
    )
}

export default TableItem
