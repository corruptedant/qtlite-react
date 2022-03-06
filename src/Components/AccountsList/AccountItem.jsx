import React from 'react'

function AccountItem({ account }) {
    return (
        <div className="my-2 bg-gray-200 hover:bg-gray-400 rounded-2xl p-4 cursor-pointer">
            <div className="flex items-center">
                <h2 className="text-2xl">{account.username}</h2>
                <p className="ml-auto text-gray-500">RM {account.hutang}</p>
            </div>
        </div>
    )
}

export default AccountItem
