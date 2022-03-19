import { useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

import { useAuth } from '../hooks/useAuth'
import { useDarkMode } from '../hooks/useDarkMode'
import Loading from './Loading'

function RequireAuth({ children }) {
    // useDarkMode has a useEffect that checks for the
    // default theme. We import it so /login loads
    // dark mode upon first visit.
    const [enabled, setEnabledState] = useDarkMode()

    const auth = useAuth()
    const location = useLocation()

    useEffect(() => {
        if (auth.user === null) {
            auth.fetchUser()
        }
    })

    if (auth.user === '') {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />
    } else if (auth.user !== '' && auth.user !== null) {
        // anonymous(not logged in) has username of blank('')
        return children
    } else {
        return <Loading />
    }
}

export default RequireAuth
