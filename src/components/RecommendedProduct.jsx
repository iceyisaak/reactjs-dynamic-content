import React from 'react'

const RecommendedProduct = () => {

    const product={
        name:"Quardro formaggi",
        price:"7.99€",
        availability:"In stock"
    }

  return (
    <main>
        <h2>Product Info</h2>
        <h5>Name: {product.name}</h5>
        <h5>Price: $ {product.price}</h5>
        <h5>Availability: {product.availability}</h5>
    </main>
  )
}

export default RecommendedProduct