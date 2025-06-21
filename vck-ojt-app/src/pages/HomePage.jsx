import Header from "../component/Header/Header";
const HomePage = () => {
    return(
        <div>
            <Header/>
      <div className="home-container">
      <h1 align="center">VIVEKANAND COLLEGE, KOLHAPUR</h1>
      <h3 align="center">2130, E Ward, Tarabai Park, Kolhapur, Maharashtra 416003</h3>
      <hr/>
      </div>
      <h1 align="center">Welcome!</h1>
      <p>*Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
      <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
      <hr/>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
        <li>Legacy of Excellence:** Decades of commitment to quality education.</li>
        <li>Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
        <li>Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
        <li>Strong Placements:** Excellent career opportunities with leading companies.</li>
      </ul>
      <h5 align="center">Ready to start your journey with us?</h5>
      <div className="button">
          <a href="https://admvck.bterp.org/StudentLogIn1/Index/">
            <button>Apply Now</button>
          </a>
        </div>
    </div>
  );
}


export default HomePage;