const getCart = ()=>{
    return JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')):[]
}

const addToCart = (product)=>{
    const cart = getCart()
    // if(cart.length){
    //     console.log('first')
    // }
    // else{
        
    // }
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}
export {getCart, addToCart}
