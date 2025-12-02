import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import Test from './Test.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Test />
    </StrictMode>
)
