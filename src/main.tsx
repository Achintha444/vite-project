import { createRoot } from 'react-dom/client'
import './index.css'
import AppUsingEvents from './AppUsingEvents.tsx'
import AppUsingInBuilt from './AppUsingInBuilt.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <AppUsingEvents />
    <AppUsingInBuilt />
  </>
)
