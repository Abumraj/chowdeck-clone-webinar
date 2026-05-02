import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import AttendeesList from './pages/AttendeesList'

const basename = '/chowdeck-clone-webinar/app'

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/attendees" element={<AttendeesList />} />
      </Routes>
      <Footer />
      <div className="version-badge">
        React + Vite{' '}
        <a href="/chowdeck-clone-webinar/">Try Static Version →</a>
      </div>
    </BrowserRouter>
  )
}

export default App
