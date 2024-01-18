import Cart from './Cart'
import Search from './Search'
import style from './Header.module.css'

function Header() {
  return(
    <header className={style.header}>
      <div> 
        <Search />
        <Cart />
      </div>
    </header>
  )
}

export default Header