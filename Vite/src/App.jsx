import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Page from "./Pages/Page";
import AppState from "./Context/AppContext/AppState";

function App() {

  return (
    <>
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </AppState>
    </>
  )
}

export default App
