import {StrictMode, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, useRoutes} from 'react-router-dom'
import routes from '~react-pages'
import './index.css'

function Application() {
    return <Suspense>
        {useRoutes(routes)}
    </Suspense>
}

let application = document.getElementById('root')
ReactDOM.createRoot(application).render(
    <StrictMode>
        <BrowserRouter>
            <Application/>
        </BrowserRouter>
    </StrictMode>
)