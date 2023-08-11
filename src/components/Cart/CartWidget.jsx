import ImageCart from '../../assets/logo.svg'
import './CartWidget.css'

const CartWidget = (Cantidad) => {
  return (
    <div>
        <img src={ImageCart} alt="CartWidget" />
        <p>{Cantidad}</p>
    </div>
  )
}


export default CartWidget;