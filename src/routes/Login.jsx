import quicktrack from '../Icons/quicktrack.svg'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'

import { Navigate, useNavigate, useLocation } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const location = useLocation()

    const auth = useAuth()

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const username = formData.get('username')
        const password = formData.get('password')

        auth.signIn(username, password, () => {
            navigate(from, { replace: true })
        })
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
        <form
            onSubmit={handleSubmit}
            className="grid place-items-center bg-gray-300 w-96 mx-auto mt-40 p-12 rounded-2xl shadow-xl shadow-gray-500"
        >
            <img className="w-20 h-20" src={quicktrack} alt="" />
            <h2 className="text-2xl">Login</h2>
            <div className="grid pt-2">
                <label htmlFor="username text-left">Username</label>
                <input
                    className="bg-gray-100 rounded-xl px-2 outline-none"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="john_smith"
                />
            </div>
            <div className="grid pt-2">
                <label htmlFor="password">Password</label>
                <input
                    className="bg-gray-100 rounded-xl px-2 outline-none"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="apestronk"
                />
            </div>
            <button type="submit"></button>
        </form>
    )
}

export default Login
