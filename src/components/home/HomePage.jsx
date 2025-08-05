import Header from './Header'
import CardContainer from './CardContainer'
import { useEffect, useState } from 'react'
import api from '../../api'
import PlaceHolderContainer from '../ui/PlaceHolderContainerr'

const HomePage = () => {

  const [products , setProducts] = useState([])
  const[loading, setLoading] = useState(false)
  useEffect(function(){
  setLoading(true)
  api.get("products")

  .then(res =>{
    console.log(res.data)
    setProducts(res.data)
    setLoading(false)
  })
     .catch(err => {
    console.log(err.message)
    setLoading(false)
    
  })
  },[] );



  return (
    <>
    <Header />
    <CardContainer products={products}/>
    <PlaceHolderContainer/>
    </>
  )
}


export default HomePage
