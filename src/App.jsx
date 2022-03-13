import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Accounts from './routes/Accounts'
import Info from './routes/Info'
import AccountDetail from './routes/AccountDetail'
import Login from './routes/Login'

import { AccountsProvider } from './contexts/accounts'
import { AuthProvider } from './contexts/auth'
import RequireAuth from './components/RequireAuth'
import ReloadPrompt from './components/ReloadPrompt'

function App() {
    return (
        <AuthProvider>
            <AccountsProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/accounts"
                        element={
                            <RequireAuth>
                                <Accounts />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/accounts/:accountId"
                        element={
                            <RequireAuth>
                                <AccountDetail />
                            </RequireAuth>
                        }
                    />
                    <Route path="/info" element={<Info />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <ReloadPrompt />
            </AccountsProvider>
        </AuthProvider>
    )
}

export default App
