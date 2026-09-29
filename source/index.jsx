import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Application from './Application.jsx'
import './index.css'

let root = document.getElementById('root')
createRoot(root).render(
    <StrictMode>
        <Application/>
    </StrictMode>
)
