import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
