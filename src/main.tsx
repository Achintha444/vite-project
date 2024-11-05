import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Assignment from './SquareDisplayAssignment.tsx'
import './index.css'

const colorList = ["red", "green", "blue"];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Assignment colorList={colorList} />
  </StrictMode>,
)
