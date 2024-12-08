import { createRoot } from 'react-dom/client'
import AppUsingInBuilt from './AppUsingInBuilt.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <>
    {/* <AppUsingEvents /> */}
    <AppUsingInBuilt />
  </>
)
