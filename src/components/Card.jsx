import { formatCurrency } from '../utilities/formatCurrency'
import addCart from '/imgs/addCart.svg'
import addedCart from '/imgs/addedCart.svg'

// eslint-disable-next-line no-unused-vars
export const Card = ({totalCartPrice, setTotalCartPrice, products, isOpenDrawer, setIsOpenDrawer, drawerProducts, setDrawer, findById}) => {

  function handleBasket(x) {
    setIsOpenDrawer(isOpenDrawer = true)
    x.inBasket = true
    x.cartQuantity = 1

    if (!drawerProducts.includes(x)) {
      setDrawer([...drawerProducts, x])
      x.quantity--
      setTotalCartPrice(totalCartPrice + x.price)
    }

  }

  return (
    products.map(x => {
      if (x.quantity > 0) {
        return (
          <tr key={x.id}>
            <td data-cell="id">#{x.id}</td>
            <td data-cell="tite">{x.title}</td>
            <td data-cell="category">{x.category}</td>
            <td data-cell="price">{formatCurrency(x.price)}</td>
            <td data-cell="stock">{x.quantity}</td>
            <td data-cell="basket">
              <button onClick={() => handleBasket(x)} className='basket'>
                {x.inBasket ? <img src={addedCart} alt='added shopping cart' /> : <img src={addCart} alt='add shopping cart' />}
              </button>
            </td>
          </tr>
        )
      }
    })
  )
} 