import CartBtn from './CartBtn'
import Search from './Search'
import style from './Header.module.css'

function Header() {
  return(
    <header className={style.header}>
      <div> 
        <Search />
        <CartBtn />
      </div>
    </header>
  )
}

export default Header