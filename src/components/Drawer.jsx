/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { formatCurrency } from '../utilities/formatCurrency'

export const Drawer = ({totalCartPrice, setTotalCartPrice, cartProducts, setCartProducts, isOpenDrawer, setIsOpenDrawer, products, setDrawerCartProducts, orders, setOrders}) => {
  const handleDrawer = () => setIsOpenDrawer(false)

  const handlePlus = (x) => {
    if (x.quantity === 0) return alert('daha fazla ekleyemzsin')
    x.quantity -= 1
    x.cartQuantity += 1

    setDrawerCartProducts([...products])
    setTotalCartPrice(totalCartPrice + x.price)

  }

  const handleClearCart = () => {
    products.forEach(product => {
      const foundedProduct = cartProducts.find(x => x.id === product.id)
      foundedProduct.quantity += product.cartQuantity
      setCartProducts([...cartProducts])
      setIsOpenDrawer(false)
      setDrawerCartProducts([])
      foundedProduct.inBasket = false
      setTotalCartPrice(0)
    });
  }

  const handleApplyCart = () => {
    products.forEach(product => {
      const foundedProduct = cartProducts.find(x => x.id === product.id)
      setCartProducts([...cartProducts])
      setIsOpenDrawer(false)
      setDrawerCartProducts([])
      foundedProduct.inBasket = false
      orders.push(product)
      setOrders([...orders])
      setTotalCartPrice(0)
    });
  }

  return (
    <div className={isOpenDrawer ? 'drawer open' : 'drawer'}>
      <button className='drawer-close' onClick={handleDrawer} style={{color: 'red', position: 'absolute', top: '0.5em', right: '1em'}}>X</button>
      <div className='drawer-content'>
        <h2>Sepetim</h2>
        <div className='drawer-wrapper'>
          <li>Hello</li>
          <ul style={{overflow: 'scroll'}}> 
            {products.map(x => (
                <li key={x.id + 1} style={{marginBlock: '1em', paddingBlock: '0.5em', borderBottom: '1px solid rgba(0,0,0,0.3)'}}>
                  {x.title}<br/>
                  <span>{x.cartQuantity}</span><br/>
                  <span>{formatCurrency(x.price * x.cartQuantity)}</span>
                  <button style={{color: 'black', fontSize: '1.2rem'}} onClick={() => handlePlus(x)}>+</button>
                </li>
            ))}
          </ul>
          <h3>Toplam Sepet Fiyatı: {totalCartPrice} TL</h3>

          <div style={{display: 'flex', gap: '2em', borderTop: '1px solid black', paddingTop: '1em'}}>
            <button onClick={handleClearCart} style={{backgroundColor: 'black', padding: '12px 18px', marginBottom: '3em'}}>Clear</button>
            <button onClick={handleApplyCart} style={{backgroundColor: 'black', padding: '12px 18px', marginBottom: '3em'}}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}