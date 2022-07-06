
import Badge from 'react-bootstrap/Badge';
import { HiShoppingCart } from "react-icons/hi";

import './styles.css';


const ItemsListCart = ({ counter }) => {
  return (
    <div>
      <div className='shoppingCar'>   
      <img src="carIcon.png"
                     width="60"
                     height="70"
                     alt="React Bootstrap logo" className='triangle'                     
      />             
        <Badge pill bg="info" style={{fontSize: 18, marginRight:'50px', borderRadius:'65px'}} >{counter}</Badge>
      </div>
      
    </div>
  )
}

export default ItemsListCart
