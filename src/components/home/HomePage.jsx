import Header from './Header'
import CardContainer from './CardContainer'
import { useEffect, useState } from 'react'
import api from '../../api'
import { randomValue } from '../../GenerateCartCode'
import PlaceHolderContainer from '../ui/PlaceHolderContainerr'
import Error from '../ui/Error'

const HomePage = () => {

  const [products , setProducts] = useState([])
  const[loading, setLoading] = useState(false)
  const[error, SetError]= useState("")


  useEffect(function(){
  setLoading(true)
  api.get("products")

  .then(res =>{
    console.log(res.data)
    setProducts(res.data)
    setLoading(false)
    SetError("")
  })
     .catch(err => {
    console.log(err.message)
    setLoading(false)
    SetError(err.message)
    
  })
  },[] );

 useEffect(function(){
    if(localStorage.getItem("cart_code") === null){
      localStorage.setItem("cart_code", randomValue)
    }
  }, [])


  return (
    <>
    <Header />
    {error && <Error error={error} />}
    {loading && <PlaceHolderContainer />}
    {loading || error !="" || <CardContainer products={products} />}
    </>
  )
}

export default HomePage
