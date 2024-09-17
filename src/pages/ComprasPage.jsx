import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'

export const ComprasPage = () => {


  const [products, setproducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setproducts(data)
    console.log(data)
  }


    useEffect(() => {
      fetchProducts()
    },[])


  return (


    <>


    {
      products.map(product => (
        <Card
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price = {product.price}
        >

        </Card>
        
      ))
    }
    </>
  )
}
