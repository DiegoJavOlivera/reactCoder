import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='div-cart'>
        <FontAwesomeIcon className='icon-Cart' icon={faCartShopping} />0
    </div>
  )
}


export default CartWidget;