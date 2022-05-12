function AddTransaction() {
    return (
        <tr>
            <td>
                <div className="border-b border-gray-400 p-2">
                    <input
                        className="w-full bg-slate-600 rounded-sm"
                        type="text"
                    />
                </div>
            </td>
            <td>
                <div className="border-b border-gray-400 p-2">
                    <input
                        className="w-full bg-slate-600 rounded-sm"
                        type="number"
                        name=""
                        id=""
                    />
                </div>
            </td>
            <td>
                <div className="border-b border-gray-400 p-2">
                    <input
                        className="w-full bg-green-500 text-gray-100 rounded-md"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </td>
        </tr>
    )
}

export default AddTransaction
