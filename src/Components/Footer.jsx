import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="logo">PRUNITH <span>ARCHITECTS</span></h2>
          <p>Crafting high-end architectural solutions with a focus on precision.</p>
        </div>

        
        <div className="footer-links">
          <h4>Go to</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h4>Connect</h4>
          <p>Whatsapp: <a href="https://wa.me/919700856370?text=Hello%20Prunith%20Architects%2C%20I%20just%20viewed%20your%20portfolio%20and%20I'm%20interested%20in%20a%20project.%20I'm%20looking%20for%20an%20architect%20for%20my%20space.%20Could%20we%20discuss%20the%20next%20steps%3F" target="_blank" rel="noreferrer">Prunith Architects</a></p>
          <p>Instagram: <a href="https://www.instagram.com/prunitharchitects" target="_blank" rel="noreferrer">@prunitharchitects</a></p>
          <p>Email: inquire@prunitharchitects.in</p>
          <p>Location: Warangal, Telangana, India.</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PRUNITH ARCHITECTS. ALL RIGHTS RESERVED.</p>
        <p>Developed by Sai Pavan Mittapalli</p>
      </div>
    </footer>
  );
};

export default Footer;