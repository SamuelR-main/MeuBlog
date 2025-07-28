import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/home/homepage'
import Conquistas from './pages/conquistas/conquistas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Conquistas />
  </StrictMode>,
)
