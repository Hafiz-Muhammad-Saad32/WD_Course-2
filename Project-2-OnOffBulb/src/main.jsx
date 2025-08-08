import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OnOffBulb from './components/onOffBulb'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnOffBulb />
  </StrictMode>
)
