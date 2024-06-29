import { NavLink } from "react-router-dom"
import cartImg from '/imgs/cart.svg'

// eslint-disable-next-line react/prop-types
export const Header = ({isOpenDrawer, setIsOpenDrawer}) => { 
  const handleDrawer = () => setIsOpenDrawer(!isOpenDrawer)
  

  return (
    <header className="header"> 
      <nav className="header-nav">
        <NavLink to='/'>Store</NavLink>
        <NavLink to='/my-orders'>My Orders</NavLink>
      </nav>

      <button onClick={handleDrawer}>
        <img src={cartImg} alt='Cart' className="cart-img"/>
      </button>
    </header>
  )
}