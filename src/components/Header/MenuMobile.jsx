import { useState } from "react"
import style from './menu.module.css'
import { Link } from "react-router-dom"
const MenuMobile = () => {
  const [menuState, setMenuState] = useState(false)
  const menuStateHandle = () => {
    setMenuState(!menuState)
  }
  return (
    <div className={style.menuMobile}>
      <button onClick={menuStateHandle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      {menuState &&
        <nav className={style.menuMobileNav}>
          <ul>
            <li>
              <Link to={'/carfixsolutions'}>Home</Link>
            </li>
            <li>
              {/* <Link to={'/carfixsolutions/servicios'}>Servicios</Link> */}
            </li>
            <li>
              <Link to={'/carfixsolutions/contactanos'}>Contactanos</Link>
            </li>
            <li>
              <Link to={'/carfixsolutions/login'}>Login</Link>
            </li>
          </ul>
        </nav>
      }
      
    </div>
  )
}

export default MenuMobile