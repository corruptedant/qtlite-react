import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './routes/App'
import Accounts from './routes/Accounts'
import Info from './routes/Info'
import AccountDetail from './routes/AccountDetail'

import { AccountsProvider } from './contexts/accounts'

ReactDOM.render(
    <React.StrictMode>
        <AccountsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route
                        path="/accounts/:accountId"
                        element={<AccountDetail />}
                    />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </AccountsProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
