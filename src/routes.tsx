import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NavMenu from 'components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasePage from 'pages/BasePage';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';

export default function AppRouter() {
    return (
        <Router>
            <main className="container">
                <NavMenu />
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="about" element={<About />} />
                        <Route path="dish/:id" element={<Dish />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </main>
        </Router>
    );
}