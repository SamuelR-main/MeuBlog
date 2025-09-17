import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/home/homepage'
import Conquistas from './pages/conquistas/conquistas'
import Calendario from './pages/calendario/calendario'
import Circle from './components/Circle'
import Home1 from './pages/home/home1'
import "./styles.css"
import Rotas from './routers/Routers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
