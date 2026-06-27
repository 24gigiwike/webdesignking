import '../styles/App.css'
import FluidGlass from '../components/FluidGlass'

export default function App() {
  return (
    <div className="container">
      <div className="container-left">
        <div className="nav-container-left">
          <div className="nav-container-left-L">
            <img src="8.png" alt="Logo" className="logo" />
          </div>
          <div className="nav-container-left-R">
            <div className="socials">
              <i><i className="fa-brands fa-x-twitter"></i></i>
              <i><i className="fa-brands fa-instagram"></i></i>
              <i><i className="fa-brands fa-facebook-f"></i></i>
              <i><i className="fa-brands fa-youtube"></i></i>
              <i><i className="fa-brands fa-tiktok"></i></i>
              <i><i className="fa-regular fa-envelope"></i></i>
              <i><i className="fa-solid fa-shopping-cart"></i></i>
            </div>
          </div>
        </div>
        
        <h1>Award winning web designer [sm] <br /> High performance websites and digital experiences for brands and businesses. <br /> UI/UX - FRONTEND - CONVERSION-FOCUSED DESIGN</h1>

        <button>Request a Quote</button>
      </div>

      {/* FLUID GLASS COMPONENT ON THE RIGHT */}
      <div className="container-right">
        <div className="nav-container-right">
          <p><i className="fa-solid fa-bars"></i></p>
        </div>
        <div className="fluid-glass-container">
          <FluidGlass 
            mode="lens"
            lensProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 5,
              chromaticAberration: 0.1,
              anisotropy: 0.01  
            }}
          />
        </div>
      </div>
    </div>
  )
}
