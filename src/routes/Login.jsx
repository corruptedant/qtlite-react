import qtlite from '../icons/qtlite.svg'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'

import { Navigate, useNavigate, useLocation } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')

    const auth = useAuth()

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const username = formData.get('username')
        const password = formData.get('password')
        auth.signIn(
            username,
            password,
            () => {
                navigate(from, { replace: true })
            },
            (err) => {
                setError(`Couldn't login!`)
            }
        )
    }

    if (auth.user !== '') {
        return <Navigate to={from} replace />
        // navigate(from, { replace: true })
    }
    return (
        <div className="main-color flex flex-col items-center h-screen">
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="grid place-items-center bg-gray-200 dark:bg-gunmetal w-96 mx-auto mt-40 p-12 rounded-md shadow-sm shadow-davys"
                >
                    <img className="w-20 h-20" src={qtlite} alt="" />
                    <h2 className="text-2xl">Login</h2>
                    <div className="grid pt-2">
                        <p className="text-red-700 font-bold">{error}</p>
                        <label htmlFor="username text-left">Username</label>
                        <input
                            className="bg-gray-100 dark:bg-davys dark:text-slate-200 rounded-xl px-2 outline-none"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="john_smith"
                        />
                    </div>
                    <div className="grid pt-2">
                        <label htmlFor="password">Password</label>
                        <input
                            className="bg-gray-100 dark:bg-davys dark:text-slate-200 rounded-xl px-2 outline-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="m-2">
                        <input
                            className="bg-keppel-500 hover:bg-keppel-300 text-gunmetal p-1 w-16 rounded-md cursor-pointer"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
