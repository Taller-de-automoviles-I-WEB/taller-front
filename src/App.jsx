import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ClientRegisterForm from './components/ClientRegisterForm/ClientRegisterForm'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/carfixsolutions' element={<Home />} />
          <Route path='/contactanos' element={ <ClientRegisterForm /> } />
          {/* <Route path='/servicios' element={ <Servicios />} /> */}
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
