import Header from './Header'
import CardContainer from './CardContainer'
import { useEffect, useState } from 'react'
import api from '../../api'

const HomePage = () => {

  const [products , setProducts] = useState([])
  useEffect(function(){

  api.get("products")
  .then(res =>{
    console.log(res.data)
    setProducts(res.data)
  })

    
  },[] );



  return (
    <>
    <Header />
    <CardContainer products={products}/>
    </>
  )
}


export default HomePage
