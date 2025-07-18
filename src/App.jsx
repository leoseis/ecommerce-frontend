import MainLayout from "./layout/MainLayout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./components/home/HomePage.JSX"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    </Route>
    </Routes>

    
    </BrowserRouter>
  )
}

export default App