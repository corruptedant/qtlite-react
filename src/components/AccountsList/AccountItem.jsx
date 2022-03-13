import React from 'react'

function AccountItem({ account }) {
    return (
        <div className="my-2 bg-gray-200 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-black dark:text-slate-200 rounded-2xl p-4 cursor-pointer">
            <div className="flex items-center">
                <h2 className="text-2xl">{account.name}</h2>
                <p className="ml-auto text-gray-500 dark:text-slate-400">
                    RM {account.amount}
                </p>
            </div>
        </div>
    )
}

export default AccountItem
