import { useState, createContext } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [csrfToken, setCsrfToken] = useState(null)

    const fetchUser = async () => {
        const response = await (await fetch(`/api/v1/user/me`)).json()

        // if user is initialized
        if (response.username !== '') {
            setUser(response.username)
        }
        setCsrfToken(response.csrfToken)
    }

    const signIn = async (username, password, callback) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken':
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }
        const response = await (
            await fetch('/api/v1/user/login', options)
        ).json()
        setUser(response)
        callback()
    }

    const signOut = async (callback) => {
        const response = await (await fetch('/api/v1/user/logout')).json()
        setUser(null)
        callback()
    }

    const value = { user, csrfToken, fetchUser, signIn, signOut }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
