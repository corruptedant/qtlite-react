import axios from 'axios'
import {
    HomeIcon,
    LogoutIcon,
    InformationCircleIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/react/outline'
import { UsersIcon } from '@heroicons/react/solid'
import qtlite from '../../icons/qtlite.svg'
import NavIcon from './NavIcon'

import { Link, useNavigate, Navigate } from 'react-router-dom'

import { destructureAxios } from '../../utils/utils'

import { useDarkMode } from '../../hooks/useDarkMode'
import { useAuth } from '../../hooks/useAuth'
import { useAccounts } from '../../hooks/useAccounts'

function Navbar() {
    const [enabled, setEnabledState] = useDarkMode()
    const auth = useAuth()
    const [state, dispatch] = useAccounts()
    const navigate = useNavigate()
    const handleLogout = async () => {
        const [res, err] = await destructureAxios(
            axios.post('/api/v1/user/logout', {}, auth.getConfig())
        )
        if (res) {
            auth.signOut()
            dispatch({ type: 'setAccounts', payload: null })
            navigate('/login', { replace: true })
        }
    }
    return (
        <nav className="nav shadow sticky top-0 z-50 ">
            <div className="fixed top-0 right-0 left-0 z-2">
                <div className="flex items-center justify-center pt-2 ">
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
            <div className="flex px-2 justify-between z-10">
                <div className="inline-flex items-center flex-shrink-0 p-2">
                    <img src={qtlite} alt="" className="h-14 w-14" />
                    <h1 className="text-2xl pl-4 hidden">Quicktrack Lite</h1>
                </div>

                <div className="flex items-center z-10">
                    <div className="flex items-center">
                        <label htmlFor="darkmode" className="">
                            {enabled ? (
                                <MoonIcon className="w-6 h-6" />
                            ) : (
                                <SunIcon className="w-6 h-6" />
                            )}
                        </label>
                        <input
                            checked={enabled}
                            onChange={() => setEnabledState(!enabled)}
                            type="checkbox"
                            name="darkmode"
                            id="darkmode"
                        />
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center cursor-pointer p-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                        <LogoutIcon className="w-8 h-8" />
                        <p className="hidden sm:block">Logout</p>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
