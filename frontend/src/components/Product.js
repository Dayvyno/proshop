import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {

  return (
    <>
      <Card className='my-2 p-2 rounded'>
        <Link to={`/product/${product._id}`} >
          <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`} >
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Title as='div'>
            <Rating 
              value={product.rating} 
              text={`${product.numReviews} reviews`} />
          </Card.Title>
          <Card.Text as='h3'>&#8358;{`${Number(product.price*500).toLocaleString()}`} </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
