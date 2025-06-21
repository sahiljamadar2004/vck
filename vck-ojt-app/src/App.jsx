import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import './styles/Pages.css';
import ChatbotComponent from "./component/Chatbot/ChatbotComponents";
import Footer from "./component/Footer/Footer";

const App = () => {
    return(
        <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
          <div> 
            <ChatbotComponent/>
            <Footer/>
          </div>
        </Router>

        </>
    )
}

export default App;