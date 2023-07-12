import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NavMenu from 'components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasePage from 'pages/BasePage';
import About from 'pages/About';

export default function AppRouter() {
    return (
        <Router>
            <NavMenu />
            <main>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}