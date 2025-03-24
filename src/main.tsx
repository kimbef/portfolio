import { createRoot } from 'react-dom/client'
import './styles.scss'
import App from './App'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
