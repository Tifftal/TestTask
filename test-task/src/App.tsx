import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TestTask/" element={<Main />}/>
          <Route path="/TestTask/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
