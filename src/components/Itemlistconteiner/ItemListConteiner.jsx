import './ItemListConteiner.css'

// eslint-disable-next-line react/prop-types
const ItemListConteiner = ({greeting}) => {
  return (
        <div className='item-list'>
                {greeting}
        </div>
  )
}

export default ItemListConteiner