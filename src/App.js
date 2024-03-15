import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Review } from "./Components/Review";

function App() {
  return (
    <>
      {/* <Router>
            <Header />
            <Home />
            <Footer />
        <Switch>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
