import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
           <ErrorBoundary>
               <App/>
          </ErrorBoundary>
      </BrowserRouter>
)
