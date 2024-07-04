import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getCart } from '../utils/cart'
import CartCard from '../components/CartCard'
import { Button } from 'react-bootstrap'

export default function Cart() {
  const [cart, setCart] = useState(getCart())
  const [totalPrice, setTotalPrice] = useState(0)
  // console.log('cart',cart)
  const handleClearCart = ()=>{
    localStorage.removeItem('cart')
    setCart([])
  }
  useEffect(()=>{
    const total = cart.reduce((t,product)=>{
      return t+product.price
    },0)
    setTotalPrice(total)
  },[cart])

  return (
    <Layout>
      <h1 className="text-center mt-3">
        Cart
      </h1>
      {
        cart.length?<><div className='mt-3 d-flex flex-wrap justify-content-evenly gap-2'>
          {
            cart.map((product)=>(
              <CartCard key={product.id} product={product} />
            ))
          }
        </div>
        <div style={{width:'100vw', position:'fixed', bottom:"0"}} className='bg-warning p-2 d-flex justify-content-around'>
        <div className="fw-bold fs-4">
        Total Price:${totalPrice}
        </div>
        <div>
          <Button variant='danger' className='mx-5' onClick={handleClearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
        </>:<div className='text-center m-5 fw-semibold'>
          Cart is Empty
        </div>
      }
      
    </Layout>
  )
}
