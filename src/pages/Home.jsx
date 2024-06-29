import { useState } from 'react'
import { Card } from '../components/Card'
import { Categories } from '../components/Categories'

// eslint-disable-next-line react/prop-types
export const Home = ({totalCartPrice, setTotalCartPrice, products, isOpenDrawer, setIsOpenDrawer, drawerProducts, setDrawer}) => {
  const [productPerPage, setProductPerPage] = useState(5)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchParams, setSearchParams] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const uniqueCategories = []
  
  const handlePerPage = (e) => {
    setProductPerPage(e.target.value)
    setCurrentPage(1)
  }

  const changeCategory = (e) => {
    setSelectedCategory(e.target.value)
    setCurrentPage(1)
  }

  const handleSearchKey = (e) => {
    setSearchParams(e.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  products.forEach(product => !uniqueCategories.includes(product.category) ? uniqueCategories.push(product.category) : null)

  const filteredProducts = selectedCategory !== 'All'
  ? products.filter(x => x.category === selectedCategory)
  : products

  const filteredKeyProducts = searchParams !== ''
  ? filteredProducts.filter(x => x.title.toLowerCase().includes(searchParams.trim().toLowerCase()))
  : filteredProducts

  const indexOfLastItem = currentPage * productPerPage;
  const indexOfFirstItem = indexOfLastItem - productPerPage;

  const filteredAndSliceProducts = filteredKeyProducts.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className='wrapper'>
      <h1 className='page-title'>My Store</h1>

      <table className='table-container'>
        <thead>
          <tr>
            <th>Store</th>
            <th colSpan={3}>
              <form className='search-form'>
                <input className='search-input' type='text' placeholder='search one someting..' onChange={handleSearchKey}/>
              </form>
            </th>
            <th className='categories-th'>
              <span>Categories</span>
              <select className='select' value={selectedCategory} onChange={changeCategory}>
                <option value="All">All</option>
                <Categories products={uniqueCategories} />
              </select>
            </th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>In Basket</th>
          </tr>
        </thead>

        <tbody>
          <Card totalCartPrice={totalCartPrice} setTotalCartPrice={setTotalCartPrice} cartProducts={products} products={filteredAndSliceProducts} isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} drawerProducts={drawerProducts} setDrawer={setDrawer}/>
        </tbody>  
        
        <tfoot>
          <tr>
            <td colSpan={2}>
              <div className='per-page'>
                Showing
                <select value={productPerPage} onChange={handlePerPage} className='select'>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                  <option value={30}>30</option>
                </select>
                <span style={{ marginLeft: '0.4em' }}>Of {filteredKeyProducts.filter(x => x.quantity !== 0).length}</span>
              </div>
            </td>
            <td colSpan={2}></td>
            <td colSpan={1}>
              <div className='pagination-wrapper'>
              {[...Array(Math.ceil(filteredKeyProducts.length / productPerPage)).keys()].map((index) => (
                  <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? "active" : ""}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}  