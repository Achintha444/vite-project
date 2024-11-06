import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SquareDisplayAssignment from './SquareDisplayAssignment.tsx'
import './index.css'

const colorList = ["red", "green", "blue"];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SquareDisplayAssignment colorList={colorList} />
  </StrictMode>,
)
