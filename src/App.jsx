import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import ChatbotComponent from "./component/Chatbot/ChatbotComponents";
import "./styles/pages.css";
import "./App.css";
import Footer from "./component/Footer/Footer";
import { useState } from "react";
import Header from "./component/Header/Header";
import AdmissionPage from "./pages/AdmissionPage";
import DeveloperInfoPopup from "./component/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sahil jamadar"
          studentPhotoUrl="/images/DSC07773-1.jpg"
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <div className="main-layout">
          <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/course" element={<CoursesPage/>}/>
              <Route path="/contact" element={<Contactpage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
            </Routes>
          </div>
          <ChatbotComponent/>
          <Footer/>
      </div>
      </Router>
      </>
  )
}

export default App;