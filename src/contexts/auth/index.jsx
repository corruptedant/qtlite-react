import { useState, createContext } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [csrfToken, setCsrfToken] = useState(null)

    const fetchUser = async () => {
        const response = await (await fetch(`/api/v1/user/me`)).json()
        console.log(response)
        setUser(response.username)
        setCsrfToken(response.csrftoken)
    }

    const getConfig = () => {
        return {
            headers: {
                'X-CSRFToken': csrfToken,
            },
        }
    }

    const signIn = async (username, password, callback, callbackError) => {
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
        const response = await fetch('/api/v1/user/login', options)
        if (response.ok) {
            const data = await response.json()
            setUser(data)
            setCsrfToken(data.csrftoken)
            callback()
        } else {
            callbackError(response)
        }
    }

    const signOut = async (callback) => {
        // const response = await (await fetch('/api/v1/user/logout')).json()
        setUser(null)
        callback()
    }

    const value = {
        user,
        csrfToken,
        getConfig,
        fetchUser,
        signIn,
        signOut,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
