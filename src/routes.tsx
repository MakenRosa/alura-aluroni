import NavMenu from 'components/NavMenu';
import Footer from 'components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const Menu = lazy(() => import('pages/Menu'));
const About = lazy(() => import('pages/About'));
const BasePage = lazy(() => import('pages/BasePage'));
const NotFound = lazy(() => import('pages/NotFound'));
const Dish = lazy(() => import('pages/Dish'));


export default function AppRouter() {
    return (
        <Router>
            <main className="container">
                <NavMenu />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<BasePage />}>
                            <Route index element={<Home />} />
                            <Route path="menu" element={<Menu />} />
                            <Route path="about" element={<About />} />
                            <Route path="dish/:id" element={<Dish />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </main>
        </Router>
    );
}