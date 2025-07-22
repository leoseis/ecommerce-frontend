import Header from './Header'
import CardContainer from './CardContainer'
import { useEffect } from 'react'
import api from '../../api'

const HomePage = () => {
   
  useEffect(function(){

  api.get("products")
  .then(res =>{
    console.log(res.data)
  })

    
  },[] );



  return (
    <>
    <Header />
    <CardContainer />
    </>
  )
}

export default HomePage
