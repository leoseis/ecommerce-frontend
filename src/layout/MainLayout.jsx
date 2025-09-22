import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"

const MainLayout = ({numCartItems}) => {
  return (
    <>
    <NavBar numCartItems ={numCartItems} />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout
