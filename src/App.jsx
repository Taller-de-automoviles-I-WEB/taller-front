import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ClientRegisterForm from './components/ClientRegisterForm/ClientRegisterForm'
import WorkShopServices from './components/WorkShopServices/WorkShopServices'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/carfixsolutions' element={ <Home /> } />
          <Route path='/carfixsolutions/contactanos' element={ <ClientRegisterForm /> } />
          <Route path='/carfixsolutions/servicios' element={ <WorkShopServices /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
