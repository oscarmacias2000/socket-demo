import './App.css'
import { Routes } from 'react-router' 
import { Route} from 'react-router' 
import Nodo from '../src/components/nodo'
import Home from './components/renderHome'


function App() {


  return (
    <>
       
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/nodo' element={<Nodo/>}></Route>
          </Routes>

    
        
    </>
  )
}

export default App
