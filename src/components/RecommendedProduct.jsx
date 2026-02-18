import React from 'react'

const RecommendedProduct = () => {

    const recommendation={
        name:"Quardro formaggi",
        price:"7.99",
        availability:"In stock"
    }

  return (
    <main>
        <h2>Menu of the Day</h2>
        <h4>Name: {recommendation.name}</h4>
        <h4>Price: {recommendation.price}€</h4>
        <h4>Availability: {recommendation.availability}</h4>
        <hr/>
    </main>
  )
}

export default RecommendedProduct