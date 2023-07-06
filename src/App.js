import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Category from './pages/Category'
import Recipe from './pages/Recipe'

function App() {
    return (
        <>
            <BrowserRouter basename='/react-food'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/meal/:recipeId' element={<Recipe />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
