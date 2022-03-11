import {
    HomeIcon,
    LogoutIcon,
    InformationCircleIcon,
} from '@heroicons/react/outline'
import { UsersIcon } from '@heroicons/react/solid'
import quicktrack from '../../Icons/quicktrack.svg'
import NavIcon from './NavIcon'

import { Link } from 'react-router-dom'

import { useDarkMode } from '../../hooks/useDarkMode'

function Navbar() {
    const [enabled, setEnabledState] = useDarkMode()
    return (
        <nav className="nav flex px-2 justify-between shadow sticky top-0 z-50 bg-white">
            <div className="inline-flex items-center flex-shrink-0 p-2">
                <img src={quicktrack} alt="" className="h-14 w-14" />
                {/* FIXME: Correctly centers the middle portion. */}
                <h1 className="text-2xl pl-4 hidden">Quicktrack Lite</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex items-center ">
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
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <label htmlFor="darkmode">Enable Dark Mode</label>
                    <input
                        checked={enabled}
                        onChange={() => setEnabledState(!enabled)}
                        type="checkbox"
                        name="darkmode"
                        id="darkmode"
                    />
                </div>
                <div className="flex items-center cursor-pointer">
                    <LogoutIcon className="w-8 h-8" />
                    <p>Logout</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
