import MainLayout from "./layout/MainLayout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./components/home/HomePage.JSX"
import NotFoundPage from "./components/ui/NotFoundPage"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
     <Route path="*" element={<NotFoundPage />} />
    </Route>
    </Routes>

    
    </BrowserRouter>
  )
}

export default App