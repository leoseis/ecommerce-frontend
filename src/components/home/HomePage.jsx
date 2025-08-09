import Header from './Header'
import CardContainer from './CardContainer'
import { useEffect, useState } from 'react'
import api from '../../api'
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



  return (
    <>
    <Header />
    {loading ? <PlaceHolderContainer/>:<CardContainer products={products}/> }
    {error && < Error error={error} />}
    
    </>
  )
}


export default HomePage
