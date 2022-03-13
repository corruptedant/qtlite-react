import AccountItem from './AccountItem'
import { data } from './data'

import { Link } from 'react-router-dom'

function AccountsList({ accounts }) {
    return (
        <div className="grid w-96 pb-44">
            {accounts.map((account) => (
                <Link key={account.id} to={`/accounts/${account.id}`}>
                    <AccountItem account={account} />
                </Link>
            ))}
        </div>
    )
}

export default AccountsList
