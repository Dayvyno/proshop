import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating';
import { useDispatch, useSelector} from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message'



const ProductScreen = () => {
  
  const [qty, setQty] = useState(1)
  
  const params = useParams();

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading, product, error} = productDetails

  useEffect(()=>{
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-light my-2' to={'/'} >Go Back</Link>
      {
        loading
        ? <Loader /> 
        : error
        ? <Message variant='danger'>{error} </Message> 
        : <Row>
            <Col md={5} >
              <Image src={product.image} alt={product.name} fluid ></Image>
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>{product.name}</ListGroup.Item>
                <ListGroup.Item><Rating value={product.rating} text={`${product.numReviews} ${product.numReviews>1? 'reviews': 'review'}`} /></ListGroup.Item>
                <ListGroup.Item>Price: &#8358;{`${Number(product.price*500).toLocaleString()}`}</ListGroup.Item>
                <ListGroup.Item>Description: {product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>&#8358;{`${Number(product.price*500).toLocaleString()}`}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>{product.countInStock > 0? 'In Stock': 'Out Of Stock'}</Col>
                    </Row>
                  </ListGroup.Item>

                {
                  product.countInStock > 0 && 
                (<ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Select 
                        value={qty} onChange={(e)=>setQty(e.target.value)} >
                        {[...Array(product.countInStock).keys()].map(x=>(
                          <option key={x+1} value={x+1}>
                            {x+1}
                          </option>
                          ))}
                      </Form.Select>
                    </Col>
                  </Row>
                </ListGroup.Item>)
                }

                  <ListGroup.Item>
                    <Button disabled={product.countInStock===0} 
                    className='btn-block' type='button'
                    onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
    

      }
    </>
  )
}

export default ProductScreen