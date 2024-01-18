import { useState } from 'react'
import style from './Search.module.css'
import { FaSearch } from 'react-icons/fa'

function Search() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <form className={style.search}>
      <input type='search' placeholder='Buscar produtos' value={searchValue} required onChange={(e) => setSearchValue(e.target.value)} />
      <button type='submit'><FaSearch/></button>
    </form>
  )
}

export default Search