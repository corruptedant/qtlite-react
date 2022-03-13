import quicktrack from '../Icons/quicktrack.svg'
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

    useEffect(() => {
        if (auth.user === null) {
            auth.fetchUser()
        }
    })

    if (auth.user !== '') {
        return <Navigate to={from} replace />
        // navigate(from, { replace: true })
    }
    return (
        <div className="main-color flex flex-col items-center h-screen">
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="grid place-items-center bg-gray-200 dark:bg-gray-500 w-96 mx-auto mt-40 p-12 rounded-md shadow-sm shadow-gray-400"
                >
                    <img className="w-20 h-20" src={quicktrack} alt="" />
                    <h2 className="text-2xl">Login</h2>
                    <div className="grid pt-2">
                        <p className="text-red-700 font-bold">{error}</p>
                        <label htmlFor="username text-left">Username</label>
                        <input
                            className="bg-gray-100 dark:text-gray-800 rounded-xl px-2 outline-none"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="john_smith"
                        />
                    </div>
                    <div className="grid pt-2">
                        <label htmlFor="password">Password</label>
                        <input
                            className="bg-gray-100 dark:text-gray-800  rounded-xl px-2 outline-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default Login
