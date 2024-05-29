import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Service/Service";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Error from "./Components/Pages/Error/Error";
import Header from "./Components/Partials/Header/Header";
import Footer from "./Components/Partials/Footer/Footer";
const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;
