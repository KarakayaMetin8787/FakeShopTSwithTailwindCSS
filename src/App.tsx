import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ModalProvider } from './context/ModalContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
