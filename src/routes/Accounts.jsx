import { useState, useContext, useEffect } from 'react'

import axios from 'axios'

import { AccountContext } from '../contexts/accounts'
import AccountsList from '../components/AccountsList/AccountsList'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

import { UserAddIcon } from '@heroicons/react/outline'

import { useToggle } from '../hooks/useToggle'
import { useAuth } from '../hooks/useAuth'

import { destructureAxios } from '../utils/utils'

function AddAccountForm(props) {
    return (
        <form
            onSubmit={props.handleSubmit}
            className="flex flex-col items-center bg-gray-200 dark:bg-gunmetal text-white dark:text-slate-200 shadow-lg p-4 rounded-md mt-4"
        >
            <h3 className="text-2xl mr-auto">Add Account</h3>
            <div className="flex items-start flex-col mt-5">
                <label className="px-2 py-1" htmlFor="name">
                    Account Name
                </label>
                <input
                    className="rounded-md p-1 bg-gray-100 text-white dark:text-slate-200 dark:bg-davys px-3 "
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jimmy Jim"
                />
            </div>
            <div className="mt-5">
                <button
                    type="submit"
                    className="rounded-md bg-gray-100 text-gray-800 dark:bg-keppel-500 dark:hover:bg-keppel-300 dark:text-midnight px-4 py-1"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

function Accounts() {
    const [state, dispatch] = useContext(AccountContext)
    const auth = useAuth()

    const [searchText, setSearchText] = useState('')
    const [isAddAccToggled, setIsAddAccToggled] = useToggle(false)
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {
        const getAccounts = async () => {
            await fetch(`/api/v1/accounts`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch({ type: 'setAccounts', payload: data })
                })
        }
        if (state.accounts === null) {
            getAccounts()
        }
    }, [state, dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.querySelector('#name').value
        const [res, err] = await destructureAxios(
            axios.post('/api/v1/accounts', { name }, auth.getConfig())
        )
        if (res) {
            return dispatch({
                type: 'setAccounts',
                payload: [...state.accounts, res.data],
            })
        }
        // else
        console.error('Error while making new account', err)
    }
    return (
        <>
            <Navbar />
            <div className="main-color flex flex-col items-center bg-gray-100 min-h-screen">
                <div className="relative">
                    <div className="flex items-end justify-between">
                        <h1 className="text-4xl mt-2">Accounts</h1>
                        <div
                            onClick={setIsAddAccToggled}
                            title="Add Account"
                            className="cursor-pointer px-4 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-[#43B9A2] text-midnight hover:dark:bg-[#55CBB5] rounded-xl"
                        >
                            <UserAddIcon className="w-8 h-8" />
                        </div>
                    </div>
                    {isAddAccToggled && (
                        <AddAccountForm handleSubmit={handleSubmit} />
                    )}
                    <SearchBar handleChange={handleChange} />
                    {state.accounts === null ? (
                        <h1>Loading...</h1>
                    ) : (
                        <AccountsList
                            accounts={state.accounts.filter((acc) =>
                                acc.name.toLowerCase().includes(searchText)
                            )}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Accounts
