import {
    HomeIcon,
    LogoutIcon,
    InformationCircleIcon,
} from '@heroicons/react/outline'
import { UsersIcon } from '@heroicons/react/solid'
import quicktrack from '../../Icons/quicktrack.svg'
import NavIcon from './NavIcon'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex items-center px-2 shadow sticky top-0 z-50 bg-white">
            <div className="flex items-center flex-shrink-0 p-2">
                <img src={quicktrack} alt="" className="h-14 w-14" />
                <h1 className="text-2xl pl-4 hidden xl:block">
                    Quicktrack Lite
                </h1>
            </div>
            <div className="flex items-center mx-auto">
                <Link to="/">
                    <NavIcon Icon={HomeIcon} title={'Home'} />
                </Link>
                <Link to="/accounts">
                    <NavIcon Icon={UsersIcon} title={'Accounts'} />
                </Link>
                <Link to="/info">
                    <NavIcon Icon={InformationCircleIcon} title={'Info'} />
                </Link>
            </div>
            <div className="flex items-center">
                <div className="flex items-center cursor-pointer">
                    <LogoutIcon className="w-8 h-8" />
                    <p>Logout</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
