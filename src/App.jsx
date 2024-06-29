import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { MyOrders } from './pages/MyOrders'
import './App.css'
import { Drawer } from './components/Drawer'
import { useState } from 'react'
import product from './data/products.json'

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [drawerCartProducts, setDrawerCartProducts] = useState([])
  const [products, setProducts] = useState(product)
  const [orders, setOrders] = useState([])
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setIsOpenDrawer(false)
  })

  return (
    <>
      <Header isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} />
      <main className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                totalCartPrice={totalCartPrice}
                setTotalCartPrice={setTotalCartPrice}
                products={products}
                isOpenDrawer={isOpenDrawer}
                setIsOpenDrawer={setIsOpenDrawer}
                drawerProducts={drawerCartProducts}
                setDrawer={setDrawerCartProducts}
              />
            }
          />
          <Route
            path='/my-orders'
            element={<MyOrders orders={orders} setOrders={setOrders} />}
          />
        </Routes>
      </main>
      <Drawer
        totalCartPrice={totalCartPrice}
        setTotalCartPrice={setTotalCartPrice}
        cartProducts={products}
        setCartProducts={setProducts}
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
        products={drawerCartProducts}
        setDrawerCartProducts={setDrawerCartProducts}
        orders={orders}
        setOrders={setOrders}
      />
      <Footer />
    </>
  )
}

export default App
