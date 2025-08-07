import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/home/homepage'
import Conquistas from './pages/conquistas/conquistas'
import Calendario from './pages/calendario/calendario'
import Circle from './components/Circle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Circle />
  </StrictMode>,
)
