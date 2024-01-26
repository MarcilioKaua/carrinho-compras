import { useState, useContext } from 'react'
import style from './Search.module.css'
import { FaSearch } from 'react-icons/fa'
import fetchProducts from '../api/fetchProducts'
import Context from '../context/Context'

function Search() {

  const { setProducts, setLoading } = useContext(Context)
  const [searchValue, setSearchValue] = useState('')

  async function handleSearch(e) {
    e.preventDefault()
    setLoading(true)
    const data = await fetchProducts(searchValue)
    setProducts(data)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form className={style.search} onSubmit={handleSearch}>
      <input type='search' placeholder='Buscar produtos' value={searchValue} required onChange={(e) => setSearchValue(e.target.value)} />
      <button type='submit'><FaSearch/></button>
    </form>
  )
}

export default Search