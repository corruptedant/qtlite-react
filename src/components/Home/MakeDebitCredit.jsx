import { useToggle } from '../../hooks/useToggle'

function MakeDebitCredit(props) {
    const [isDebit, setIsDebit] = useToggle(true)

    return (
        <form
            onSubmit={props.handleSubmit}
            className="mt-4 p-4 bg-gray-200 shadow-gray-300 dark:bg-gunmetal dark:shadow-davys text-black dark:text-slate-200 rounded-sm shadow-sm "
        >
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">
                    Make {isDebit ? 'Debit' : 'Credit'}
                </h2>
                <label
                    className={`${
                        !isDebit
                            ? 'bg-green-500 hover:bg-green-400 text-midnight'
                            : 'bg-red-600 hover:bg-red-500 text-midnight'
                    } 
                    rounded-md p-2 bg-gray-400 cursor-pointer`}
                    htmlFor="isDebit"
                >
                    Switch to {!isDebit ? 'Debit' : 'Credit'}
                </label>
                <input
                    onChange={setIsDebit}
                    type="checkbox"
                    name="isDebit"
                    id="isDebit"
                    className="hidden"
                    checked={isDebit}
                />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center pt-2">
                    <label htmlFor="account">Account</label>

                    <select
                        className="ml-2 rounded-sm bg-gray-100 dark:bg-davys p-1"
                        name="account"
                        id="account"
                        required
                    >
                        <option disabled value="">
                            ---------
                        </option>
                        {props.accounts.map((acc) => (
                            <option key={acc.id} value={acc.id}>
                                {acc.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center pt-2">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="rounded-sm bg-gray-100 dark:bg-davys ml-2 p-1"
                        required
                    />
                </div>
                <div className="flex items-center pt-2">
                    <label htmlFor="desc">Description</label>
                    <input
                        type="text"
                        name="desc"
                        id="desc"
                        className="rounded-sm bg-gray-100 dark:bg-davys ml-2 p-1"
                        required
                    />
                </div>
                <div className="flex items-center pt-2">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        step="0.0001"
                        className="rounded-sm bg-gray-100 dark:bg-davys ml-2 p-1"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="p-2 rounded-md bg-gray-300 dark:bg-keppel-500 text-midnight mt-4"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default MakeDebitCredit
