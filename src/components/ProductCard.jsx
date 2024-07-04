import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../utils/cart';

function ProductCard({product}) {
    const navigate = useNavigate()
  return (
    <div className='product-card'>
        <Card style={{ width: '18rem', cursor:'pointer' }} className='border border-0 box-shadow'>
      <Card.Img style={{height:'18rem'}} variant="top" src={product.image} />
      <Card.Body>
        <Card.Text style={{overflow:'hidden', height:'3em'}}>{product.title}</Card.Text>
        <Card.Title className='fw-semibold'>
          ${product.price}
        </Card.Title>
        <div className='d-flex flex-wrap justify-content-between'>
        <Button variant="warning"
        onClick={()=>{addToCart(product)}}
        >Add to cart</Button>
        <Button variant="info"
        onClick={()=>{navigate(`/product/details/${product.id}`)}}
        >View Details</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProductCard;