import React from 'react'

const ProductInfo = () => {
    const products = [
    { id: 1, name: "Salami", price: "6.99" },
    { id: 2, name: "Margarita", price: "5.99" },
    { id: 3, name: "Tuna", price: "6.99" },
  ];
  return (
    <div>
        <h3>Menu:</h3>
        {
            products.map((p)=>(
                <ul key={p.id}>
                    <li>{p.name} - <span>{p.price}€</span></li>
                </ul>
            ))
        }
    </div>
  )
}

export default ProductInfo