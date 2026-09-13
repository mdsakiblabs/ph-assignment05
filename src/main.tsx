import { Toaster } from "react-hot-toast";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster />
  </>
)
