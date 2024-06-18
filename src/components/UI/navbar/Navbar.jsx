import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cl from './Navbar.module.css'
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.remove('auth')
  }
  return (
    <nav className={cl.navbar}>
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
      <ul>
        <li>
          {/* Используй Link to для перехода по внутренним ссылкам без перезагрузки страницы */}
          <Link to='/about'>О сайте </Link>
        </li>
        <li>
          <Link to='/posts'>Посты </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar;